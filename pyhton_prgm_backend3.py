import sys

from flask import Flask
app=Flask(__name__)
@app.route("/")
def prgm():
    return str(sys.argv[1])
if __name__ == "__main__":
    app.run()
app.run(port=5000)