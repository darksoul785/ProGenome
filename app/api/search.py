from Bio.Blast import NCBIWWW
from Bio import SeqIO, Entrez, ExPASy

def getTest(value, database = "nucleotide"):
    arrData = []
    # arrData.append(value)

    search_term = value  # e.g., protein name, gene name, accession number
    # Entrez.email = "a19310213@ceti.mx"
    # Entrez.api_key = "4d788df9760b5c99f223eda7f61601168908"
    handle = Entrez.esearch(db=database, term=search_term, retmax="20")
    record = Entrez.read(handle)
    id_list = record['IdList']
    for seq_id in id_list:
        handle = Entrez.efetch(db=database, id=seq_id, rettype='fasta', retmode='text')
        record = SeqIO.read(handle, 'fasta')
        #print(record.description)
        arrData.append([record.description, record.])
        #print(record.seq)
        #arrData.append(record.seq)
        #print('---')

    return arrData

def getProteinData(pid, term = "", db1 = "", db2 = ""):
    proteinData = []
    # proteinData.append(pid)
    with ExPASy.get_sprot_raw(pid) as handle:
        seq_record = SeqIO.read(handle, "swiss")
        print(seq_record.id)
        print(seq_record.name)
        print(seq_record.description)
        # print(repr(seq_record.seq))
        # print("Length %i" % len(seq_record))
        # print(seq_record.annotations["keywords"])
        # proteinData.append(seq_record.description)
