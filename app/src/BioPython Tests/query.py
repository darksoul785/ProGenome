import requests
from bs4 import BeautifulSoup

# Perform the search on SwissProt
search_term = "Mus musculus Akt1 variant 6".replace(" ", "+")
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
        print(swissIds)
        accession = {
            'amount': len(swissIds),
            'value': swissIds
        }

if accession is not None:
    print("ExPASy Accession:", accession)
else:
    print("Protein not found in SwissProt")
