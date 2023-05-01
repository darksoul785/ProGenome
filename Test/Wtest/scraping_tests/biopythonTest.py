from Bio import Entrez
def getMrnaById(id):
    Entrez.email = "a19310211@ceti.mx"
    # Call esearch to find IDs
    handle = Entrez.esearch(db="protein", term="human", retmax = 10)
    # get a list of IDs out of esearch
    records = Entrez.read(handle)
    identifiers = records["IdList"]
    # Use efetch to retrieve entries
    handle = Entrez.efetch(db="nucleotide", id=id, retmax = "10",
                            rettype = "fasta", retmode="text")
    # To read data from text entries as a string:
    fasta = handle.read()
    return fasta

id = int(input("Enter id: "))