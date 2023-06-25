from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# Inicializar el navegador (por ejemplo, Chrome)
driver = webdriver.Chrome()

# Abrir la página web de búsqueda
driver.get("https://swissmodel.expasy.org/")

# Encontrar el campo de búsqueda por su identificador o nombre
search_field = driver.find_element_by_id("query")

# Ingresar el término de búsqueda en el campo
search_term = "Akt1 Mus musculus variant 11"
search_field.send_keys(search_term)

# Pulsar Enter para realizar la búsqueda
search_field.send_keys(Keys.RETURN)

# Esperar a que se carguen los resultados (puedes ajustar el tiempo de espera según sea necesario)
driver.implicitly_wait(10)  # Esperar 10 segundos

# Obtener los elementos de los resultados de búsqueda
results = driver.find_elements_by_css_selector(".search-result")

# Imprimir los resultados
for result in results:
    print(result.text)

# Cerrar el navegador
driver.quit()
