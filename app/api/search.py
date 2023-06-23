from Bio import Entrez, SeqIO, ExPASy

Entrez.email = 'a19310211@ceti.mx'
database = 'nucleotide'  # or 'nucleotide' for nucleotide sequences

def getTest(value, database = ""):
    arrData = []
    arrData.append(value)

    search_term = value  # e.g., protein name, gene name, accession number
    handle = Entrez.esearch(db=database, term=search_term)
    record = Entrez.read(handle)
    id_list = record['IdList']
    for seq_id in id_list:
        handle = Entrez.efetch(db=database, id=seq_id, rettype='fasta', retmode='text')
        record = SeqIO.read(handle, 'fasta')
        #print(record.description)
        arrData.append(record.description)
        #print(record.seq)
        #arrData.append(record.seq)
        #print('---')

    return arrData