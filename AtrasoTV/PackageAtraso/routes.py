from PackageAtraso import app
import pandas as pd
from flask import render_template


def filtrar_dataframe(dataframe):
    novo_dataframe = dataframe.loc[(dataframe['QUANT. TOTAL'] - dataframe['ENTREGUE']) != 0]
    return novo_dataframe


@app.route("/")
def index():
    dataframe = pd.read_csv(r'C:\Users\gerson.ribeiro\Desktop\Projetos\Lista atraso estoque\Atraso_estoque_Sier-main\atrasos_estoque.csv',
                            sep=';', encoding='ISO-8859-1')
    novo_dataframe = filtrar_dataframe(dataframe).to_dict('list')
    tamanho_df = len(novo_dataframe.get('PEÇAS', []))
    return render_template('index.html', dataframe=novo_dataframe, tamanho_df=tamanho_df)
