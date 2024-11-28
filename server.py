from flask import Flask, request, redirect, render_template
import sqlite3

app = Flask(__name__)


@app.route('/')
def main():
    return render_template('main.html')


@app.route('/submit', methods=['POST'])
def submit():
    # Capture the data from the form
    name = request.form['name']
    gender = request.form['gender']
    age = request.form['age']
    height = request.form['height']
    weight = request.form['weight']
    activity = request.form['activity']
    bmi = request.form['bmi']
    bmr = request.form['bmr']
    tdee = request.form['tdee']

    connection = sqlite3.connect('user_data.db')
    cursor = connection.cursor()
    # create a database table
    cursor.execute('''CREATE TABLE IF NOT EXISTS user_data
                        (name TEXT PRIMARY KEY, gender TEXT, age INTEGER, height INTEGER, weight INTEGER, activity TEXT, bmi REAL, bmr INTEGER, tdee INTEGER)''')
    cursor.execute("INSERT INTO user_data (name, gender, age, height, weight, activity, bmi, bmr, tdee) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                   (name, gender, age, height, weight, activity, bmi, bmr, tdee))

    connection.commit()
    connection.close()

    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)
