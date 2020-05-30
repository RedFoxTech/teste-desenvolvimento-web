import pandas as pd
from datetime import datetime
import pandas.io.sql as psql
import psycopg2 as postgres
from sqlalchemy import create_engine

engine = create_engine('CONNECTION STRING HERE')
df = pd.read_excel('pokemon-go.xlsx')
df_update = df.astype({
    'evolved':'boolean',
    'cross_gen':'boolean',
    # 'legendary':'boolean',
    # 'acquireable':'boolean',
    'spawns':'boolean',
    'regional':'boolean',
    # 'raidable':'boolean',
    # 'hatcheable':'boolean',
    'shiny':'boolean',
    'nest':'boolean',
    'new':'boolean',
    'not_gettable':'boolean',
    'future_evolve':'boolean',
})
df_update['createdAt'] = datetime.now()
df_update['updatedAt'] = datetime.now()

df_update.to_sql('Pokemons',
    engine,
    schema=None,
    if_exists='append',
    index= False, 
    index_label='id', 
    chunksize=100, 
    # dtype=None, 
)
engine.execute("select * from test_table_4;")





# try:
#     connection = postgres.connect(
#         user = "postgres",
#         password = "123mudei",
#         host = "localhost",
#         port = "5432",
#         database = "redfox_pokedex"
#     )
#     cursor = connection.cursor()
    

#     cursor.execute(create_table_query)
#     connection.commit()
#     print("Table created successfully in PostgreSQL ")

# except (Exception, postgres.DatabaseError) as error :
#     print (error)
# finally:
#     if(connection):
#         cursor.close()
#         connection.close()
#         print("PostgreSQL connection is closed")


# create_table_query = '''
#         CREATE TABLE test_table_3 (
#         id INT PRIMARY KEY NOT NULL
#         name VARCHAR NOT NULL,
#         pokedex_number INT NOT NULL,
#         img_name VARCHAR(100) NOT NULL,
#         generation INT,
#         evolution_stage VARCHAR(100) NOT NULL,
#         evolved BOOLEAN NOT NULL,
#         family_id INT NOT NULL,
#         cross_gen BOOLEAN NOT NULL,
#         type_1 VARCHAR(100) NOT NULL,
#         type_2 VARCHAR(100),
#         weather_1 VARCHAR(100) NOT NULL,
#         weather_2 VARCHAR(100),
#         stat_total INT NOT NULL,
#         atk INT NOT NULL,
#         def INT NOT NULL,
#         sta INT NOT NULL,
#         legendary BOOLEAN NOT NULL,
#         acquireable BOOLEAN NOT NULL,
#         spawns BOOLEAN NOT NULL,
#         regional BOOLEAN NOT NULL,
#         raidable INT NOT NULL,
#         shiny BOOLEAN NOT NULL,
#         nest BOOLEAN NOT NULL,
#         new BOOLEAN NOT NULL,
#         not_gettable BOOLEAN NOT NULL,
#         future_evolve BOOLEAN NOT NULL,
#         full_cp_at_40 INT NOT NULL,
#         full_cp_at_39 INT NOT NULL
#         );'''
