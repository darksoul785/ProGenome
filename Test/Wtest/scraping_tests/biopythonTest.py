from Bio import Entrez


def getMrnaById(id):
    Entrez.email = "a19310211@ceti.mx"
    # Call esearch to find IDs
    handle = Entrez.esearch(db="protein", term="human", retmax=10)
    # get a list of IDs out of esearch
    records = Entrez.read(handle)
    identifiers = records["IdList"]
    # Use efetch to retrieve entries
    handle = Entrez.efetch(db="nucleotide", id=id, retmax="10",
                           rettype="fasta", retmode="text")
    # To read data from text entries as a string:
    fasta = handle.read()
    return fasta


protein_Id = input("Enter id: ")
mrna = getMrnaById(protein_Id)
print(mrna)
with open("sequence.txt", "w") as file:
    file.writelines(mrna)
with open("sequence.txt", "r") as get_sequence:
    sequence = get_sequence.readlines()[1:]
with open("mrna.txt", "w") as new_file:
    new_file.writelines(sequence)


