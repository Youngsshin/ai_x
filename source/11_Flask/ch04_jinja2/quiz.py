from flask import Flask, render_template , request 

app = Flask(__name__) 

@app.route("/", methods=['GET', 'POSt']) 
def index():
    if request.method == "GET":
        no = None
    elif request.method == "POST":
        no = request.form.get("no") # 전달받은 파라미터 값(무조건 str)
    return render_template('quiz.html', no=no) 

if __name__ == "__main__":
    app.run(debug=True)