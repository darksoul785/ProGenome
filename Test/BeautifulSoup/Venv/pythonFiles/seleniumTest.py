from Bio import Entrez

# The NCBI server might block anonymous requests, especially big ones!

Entrez.email = "a19310211@ceti.mx"

# Call esearch to find IDs
handle = Entrez.esearch(db="protein", term="human", retmax = 10)

# get a list of IDs out of esearch
records = Entrez.read(handle)
identifiers = records["IdList"]

# Use efetch to retrieve entries
id = input("Introduzca el ID de la proteina: \n")
handle = Entrez.efetch(db="nucleotide", id=id, retmax = "10", rettype = "fasta", retmode="text")
#term = Entrez.efetch(db="protein", term = "Homo sapiens", retmax = "10", rettype = "fasta", retmode = "text")

# To read data from text entries as a string:
fasta = handle.read()
#text = term.read()
print (fasta)

#print (text)
# To read records from XML entries:
# records2 = Entrez.read(handle2)
