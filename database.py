import psycopg2

class Database():

    
    def __init__(self):
        
        self.conn = psycopg2.connect(host='localhost',user='postgres',password='postgres',dbname='postgres')
        self.cursor = self.conn.cursor()


    


        