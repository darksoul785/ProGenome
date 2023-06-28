from Bio import Entrez

Entrez.email = "a19310211@ceti.mx"
Entrez.api_key = "4d788df9760b5c99f223eda7f61601168908"

def obtener_especies_mas_buscadas(num_especies=90000):
    # Realizar la búsqueda en NCBI para obtener las especies con insulina y ordenar por relevancia
    handle = Entrez.esearch(db='protein', term='insulin', sort='relevance')
    record = Entrez.read(handle)
    handle.close()

    # Obtener los identificadores (IDs) de los primeros num_especies resultados
    id_list = record['IdList'][:num_especies]

    # Obtener los detalles de los registros de las especies seleccionadas
    handle = Entrez.efetch(db='protein', id=id_list, rettype='fasta', retmode='text')
    records = handle.read()
    handle.close()

    especies = []  # Arreglo para almacenar los nombres de las especies

    # Procesar cada registro para obtener el nombre de la especie
    for record in records.split('>'):
        if record:
            lines = record.split('\n')
            especie = str(lines[0]).split('insulin')  # Obtener el nombre de la especie
            if len(especie) > 1:
                especies.append(especie[1])
            else:
                especie = str(especie[0]).split('Insulin')
                if len(especie) > 1:
                    especies.append(especie[1])
            

    return especies

# Obtener las primeras 100 especies de las más buscadas con insulina en NCBI
especies_mas_buscadas = obtener_especies_mas_buscadas(num_especies=100)

# Imprimir las especies obtenidas
print(especies_mas_buscadas)
