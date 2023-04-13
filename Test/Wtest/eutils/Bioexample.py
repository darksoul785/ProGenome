# You should test that your search return results first on the web 
# https://www.ncbi.nlm.nih.gov/dbvar before using them 
# in your python script.  Available dbVar search terms are on the help page 
# (https://www.ncbi.nlm.nih.gov/dbvar/content/help/#entrezsearch).
# For general Entrez help and boolean search see the online book
# (https://www.ncbi.nlm.nih.gov/books/NBK3837/#EntrezHelp.Entrez_Searching_Options)

# This example will make use of these eUtils History Server parameters
# usehistory, WebEnv, and query_key.  It is highly recommended you use them in
# your pipeline and script.

# /usehistory=/
# When usehistory is set to 'y', ESearch will post the UIDs resulting from the
# search operation onto the History server so that they can be used directly in
# a subsequent E-utility call. Also, usehistory must be set to 'y' for ESearch
# to interpret query key values included in term or to accept a WebEnv as input.

# /WebEnv=/
# Web environment string returned from a previous ESearch, EPost or ELink call.
# When provided, ESearch will post the results of the search operation to this
# pre-existing WebEnv, thereby appending the results to the existing
# environment. In addition, providing WebEnv allows query keys to be used in
# term so that previous search sets can be combined or limited. As described
# above, if WebEnv is used, usehistory must be set to 'y' (ie.
# esearch.fcgi?db=dbvar&term=asthma&WebEnv=<webenv string>&usehistory=y)

# /query_key=/
# Integer query key returned by a previous ESearch, EPost or ELink call. When
# provided, ESearch will find the intersection of the set specified by query_key
# and the set retrieved by the query in term (i.e. joins the two with AND). For
# query_key to function, WebEnv must be assigned an existing WebEnv string and
# usehistory must be set to 'y'.

# load python modules
# May require one time install of biopython and xml2dict.
from Bio import Entrez
import xmltodict

# initialize some default parameters
Entrez.email = 'a19310211@ceti.mx' # provide your email address
db = 'Protein'                              # set search to dbVar database
paramEutils = { 'usehistory':'Y' }        # Use Entrez search history to cache results

# generate query to Entrez eSearch
eSearch = Entrez.esearch(db=db, term='("variant"[Object Type] AND estd214)', **paramEutils)

# get eSearch result as dict object
res = Entrez.read(eSearch)

# take a peek of what's in the result (ie. WebEnv, Count, etc.)
for k in res:
    print (k, "=",  res[k])

paramEutils['WebEnv'] = res['WebEnv']         #add WebEnv and query_key to eUtils parameters to request esummary using  
paramEutils['query_key'] = res['QueryKey']    #search history (cache results) instead of using IdList 
paramEutils['rettype'] = 'xml'                #get report as xml
paramEutils['retstart'] = 0                   #get result starting at 0, top of IdList
paramEutils['retmax'] = 5                     #get next five results

# generate request to Entrez eSummary
result = Entrez.esummary(db=db, **paramEutils)
# get xml result
xml = result.read()
# take a peek at xml
#print(xml)

#convert xml to python dict object for convenient parsing
dsdocs = xmltodict.parse(xml)

#get set of dbVar DocumentSummary (dsdocs) and print report for each (ds)

for ds in dsdocs ['eSummaryResult']['DocumentSummarySet']['DocumentSummary']: 
    for p in ds['dbVarPlacementList']['dbVarPlacement']: 
        print (ds['@uid'], ds['ST'], ds['SV'],p['Chr'], p['Chr_start'], p['Chr_end'])