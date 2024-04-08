from Sier_estoque_arquivos import app
import pandas as pd
from flask import render_template


@app.route("/", methods=['GET', 'POST'])
def index():
    dataframe = pd.read_csv(r'C:/Users/gerso/OneDrive/Área de Trabalho/atrasos_estoque.csv', sep=';')
    tamanho_df = len(dataframe)

    return render_template('index.html', dataframe=dataframe, tamanho_df=tamanho_df)
