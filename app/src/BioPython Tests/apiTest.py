from Bio.Blast import NCBIWWW
from Bio import SeqIO, Entrez, ExPASy
import requests
from bs4 import BeautifulSoup
import sys

def getNCBIResults(value, database = "nucleotide"):
    arrData = []
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
        arrData.append(record.description)
        #print(record.seq)
        #arrData.append(record.seq)
        #print('---')

    return arrData

def getProteinSwissData(term):
    # Mus musculus thymoma viral proto-oncogene 1 (Akt1), transcript variant 8, non-coding RNA
    # Homo sapiens lipase E, hormone sensitive type (LIPE), transcript variant 9, mRNA
    # Rattus norvegicus transient receptor potential cation channel, subfamily M, member 3 (Trpm3), transcript variant 2, mRNA
    term = str(term).split(",")
    species = term[0].split(" ")
    print(term)
    for each in term:
        if "(" in each:
            code = "(" + each.split("(")[1].replace(",", "")
    species = str(species[0] + " " + species[1])
    variant = ""
    for each in term:
        if "variant" in each:
            variant = each.replace(" transcript ", "").replace(",", "")

    print("species:", species)
    print("code:", code)
    print("variant:", variant)
    search_term = species + " " + code + " " + variant
    print(search_term)
    swissId = getSwissProtId(search_term)

    if (swissId == None):
        search_term = species + " " + code
        swissId = getSwissProtId(search_term)

    if (swissId != None):
        if (swissId['amount'] == 1):
            pid = swissId['value']
            with ExPASy.get_sprot_raw(pid) as handle:
                seq_record = SeqIO.read(handle, "swiss")
                print(seq_record.id)
                print(seq_record.name)
                #print(seq_record.description)
            # There is one exact result
            proteinData = {
                'type': 'protein',
                'data': [ seq_record.id, seq_record.name, seq_record.seq]
            }
        else:
            print(swissId['value'])
            # There are multiple options to select from
            proteinData = {
                'type': 'list',
                'data': swissId['value']
            }
    else:
        # There are no results
        proteinData = {
            'type': 'empty',
            'data': ""
        }
    
    return proteinData

def getSwissProtId(searchTerm):
    # Perform the search on SwissProt
    search_term = searchTerm.replace(" ", "+")
    url = f"https://swissmodel.expasy.org/repository?query={search_term}"
    print(url)
    response = requests.get(url)
    accession = None
    swissIds = []

    # Parse the HTML content of the search results page
    soup = BeautifulSoup(response.content, "html.parser")
    if "No matches found!" in str(soup):
        # For 0 results
        print("Failed to retreive a result")
    elif '<h3 style="margin:8px 0px 4px 0px">' in str(soup):
        # For 1 exact result
        strVal = str(soup).split('<div class="col-xs-12"><h3 style="margin:8px 0px 4px 0px">')
        swissId = str(strVal).split("<title>")[1].split(" ")[0]
        accession = {
            'amount': 1,
            'value': swissId
        }
    else:
        # For more than 1 result
        if "UniProtKB matches" in str(soup):
            print("More than 1 result")
            table = str(soup).split('<table class="table table-condensed table-striped table-hover">')
            table = table[1].split('<a href="/repository/uniprot/')
            for i in range(1, len(table)):
                tmp = str(table[i]).split('"')
                id = tmp[1][1:].replace("</a><br/>", " ").split("\n")[0]
                swissIds.append(id)
            accession = {
                'amount': len(swissIds),
                'value': swissIds
            }

    if accession is not None:
        print("ExPASy Accession:", accession)
    else:
        print("Protein not found in SwissProt")

    return accession


getProteinSwissData("Mus musculus thymoma viral proto-oncogene 1 (Akt1), transcript variant 11, non-coding RNA")
print("\n")
getProteinSwissData("Homo sapiens lipase E, hormone sensitive type (LIPE), transcript variant 9, mRNA")
print("\n")
getProteinSwissData("Rattus norvegicus transient receptor potential cation channel, subfamily M, member 3 (Trpm3), transcript variant 2, mRNA")