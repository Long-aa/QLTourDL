import psycopg2
try:
    conn = psycopg2.connect(
        dbname="QLTourDuLich",
        user="postgres",
        password="Longdz19082005@",
        host="localhost",
        port="8000"
    )
    print("Connection successful!")
    conn.close()
except Exception as e:
    print(f"Connection failed: {e}")
