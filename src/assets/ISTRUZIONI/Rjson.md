
Azione:
# Legge il contenuto dei file gpx "images/com_mappa/gpx/nome.gpx" e crea una tabella con tutte le coordinate lat lon ed ele

usare getListaSentieroObservable(this.tipo,this.ida,this.strx)

database "eldajvxf_mappa" tabella mysql "_sentieri_coordinate"

 	1 	idPrimaria 	int(11) 			No 	Nessuno 		AUTO_INCREMENT 

	2 	lat 	varchar(50) 	utf8mb4_general_ci 		No 	Nessuno  	

	3 	lon 	varchar(50) 	utf8mb4_general_ci 		No 	Nessuno 		

	4 	ele 	varchar(50) 	utf8mb4_general_ci 		No 	Nessuno 	

	5 	nome 	varchar(50) 	utf8mb4_general_ci 		No 	Nessuno 	 	

	6 	zona 	int(11) 			No 	Nessuno 		


## tipo: 9  
## id_cat:
## strx: nome sentiero es:100BO

## $zona  = 1;
## $posizione_file = 'images/com_mappa/gpx/'

funzione heler : delete_table($strx) e get_lan_lon_gpx($strx,$posizione_file,$zona)

service angular: sentieri.service.ts

return 1 = file non trovato, 6  Ok

--------------------------------------------------------------------------------

# Legge tabella coordinate  sentieri

 // CREA TRACCE  
 uso  getListaGpxObservable(tipo: string, ida: string, strx: string,colore:string) 

database "eldajvxf_mappa" tabella mysql "_sentieri_coordinate"

 	1 	idPrimaria 	int(11) 			No 	Nessuno 		AUTO_INCREMENT 	

	2 	lat 	varchar(50) 	utf8mb4_general_ci 		No 	Nessuno 			

	3 	lon 	varchar(50) 	utf8mb4_general_ci 		No 	Nessuno 	

	4 	ele 	varchar(50) 	utf8mb4_general_ci 		No 	Nessuno 	

	5 	nome 	varchar(50) 	utf8mb4_general_ci 		No 	Nessuno 	

	6 	zona 	int(11) 			No 	Nessuno 


## tipo: 5  
## id_cat:
## strx: nome sentiero es:100BO

funzione heler :get_ngpx($strx)
select (id,lat,lon) WHERE nome = Sstrx

service angular: gpx.service.ts

--------------------------------------------------------------------------

# legge la lista sentieri e parametri 

uso getListaSentieroObservable(this.tipo,this.ida,this.strx)

database "eldajvxf_mappa" tabella mysql "_sentieri"

1 	idPrimaria 	int(10) 		UNSIGNED 	No 	Nessuno 		AUTO_INCREMENT 	Modifica Modifica 	Elimina Elimina 	
  
	2 	name 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	3 	nome_localita 	varchar(245) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	4 	sigla_diff 	varchar(11) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	5 	descr_diff 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	6 	difficolta 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	7 	nome 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	8 	sigla 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	9 	dislivello_salita 	varchar(20) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	10 	dislivello_discesa 	varchar(20) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	11 	lunghezza 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	12 	gestore 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	13 	segnavia 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	14 	altro_segnavia 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	15 	tempo_andata 	varchar(30) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	16 	tempo_ritorno 	varchar(20) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	17 	panoramici 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	18 	carrabilita 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	19 	agibilita 	set('Completa', 'Da_verificare', 'Bloccata') 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	20 	nome_file_gpx 	varchar(200) 	latin1_swedish_ci 		No 	Nessuno 	  	
  
	21 	difficolta_id 	int(11) 			No 	Nessuno 	  	
  
	22 	zone_id 	int(11) 			No 	Nessuno 	  	
  
	23 	sottozone_id 	int(11) 			No 	Nessuno 	  	
  
	24 	gestore_id 	int(11) 			No 	Nessuno 	  	
  
	25 	colore 	varchar(40) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	26 	image 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	27 	data_manutenzione 	date 			Sì 	NULL 	  	
  
	28 	description 	text 	latin1_swedish_ci 		Sì 		  	
  
	29 	published 	tinyint(1) 			Sì 	NULL 	  	
  
	30 	created 	datetime 			Sì 	NULL 	  	
  
	31 	ordering 	int(11) 			Sì 	NULL 	  	
  
	32 	params 	text 	latin1_swedish_ci 		No 		  	
  
  ## tipo: 4 
  ## id_cat:
  ## strx: 'CAI BOLOGNA'

funzione heler :get_sentieri($strx)

select (*) WHERE gestore = Sstrx

service angular: sentieri.service.ts

-----------------------------------------------------------------------------
# Legge lista nomi dei sentieri dei quali è stat creata la tabella coordinate

uso getListaNomiObservable(tipox:string,idax: string,strxx:string) 

database "eldajvxf_mappa" tabella mysql "_sentieri_coordinate"

 	1 	idPrimaria 	int(11) 			No 	Nessuno 		AUTO_INCREMENT 	

	2 	lat 	varchar(50) 	utf8mb4_general_ci 		No 	Nessuno 			

	3 	lon 	varchar(50) 	utf8mb4_general_ci 		No 	Nessuno 	

	4 	ele 	varchar(50) 	utf8mb4_general_ci 		No 	Nessuno 	

	5 	nome 	varchar(50) 	utf8mb4_general_ci 		No 	Nessuno 	

	6 	zona 	int(11) 			No 	Nessuno 


## tipo: 11  
## id_cat:
## strx: zona

funzione heler :get_nomigpx(($strx)

select (nome) WHERE gestore = Sstrx GROUP BY nome

service angular: nomi.service.ts

--------------------------------------------------------------------------------------
# legge dati sentiero singolo da lista sentieri

 // legge i dati singolo sentiero
 uso getListaSentieroObservable(tipo:string,ida: string,strx:string)

database "eldajvxf_mappa" tabella mysql "_sentieri"

1 	idPrimaria 	int(10) 		UNSIGNED 	No 	Nessuno 		AUTO_INCREMENT 	Modifica Modifica 	Elimina Elimina 	
  
	2 	name 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	3 	nome_localita 	varchar(245) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	4 	sigla_diff 	varchar(11) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	5 	descr_diff 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	6 	difficolta 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	7 	nome 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	8 	sigla 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	9 	dislivello_salita 	varchar(20) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	10 	dislivello_discesa 	varchar(20) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	11 	lunghezza 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	12 	gestore 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	13 	segnavia 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	14 	altro_segnavia 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	15 	tempo_andata 	varchar(30) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	16 	tempo_ritorno 	varchar(20) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	17 	panoramici 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	18 	carrabilita 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	19 	agibilita 	set('Completa', 'Da_verificare', 'Bloccata') 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	20 	nome_file_gpx 	varchar(200) 	latin1_swedish_ci 		No 	Nessuno 	  	
  
	21 	difficolta_id 	int(11) 			No 	Nessuno 	  	
  
	22 	zone_id 	int(11) 			No 	Nessuno 	  	
  
	23 	sottozone_id 	int(11) 			No 	Nessuno 	  	
  
	24 	gestore_id 	int(11) 			No 	Nessuno 	  	
  
	25 	colore 	varchar(40) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	26 	image 	varchar(45) 	latin1_swedish_ci 		Sì 	NULL 	  	
  
	27 	data_manutenzione 	date 			Sì 	NULL 	  	
  
	28 	description 	text 	latin1_swedish_ci 		Sì 		  	
  
	29 	published 	tinyint(1) 			Sì 	NULL 	  	
  
	30 	created 	datetime 			Sì 	NULL 	  	
  
	31 	ordering 	int(11) 			Sì 	NULL 	  	
  
	32 	params 	text 	latin1_swedish_ci 		No 	


## tipo: 12  
## id_cat:
## strx: nome sentiero

funzione helper get_dati_singolo($strx)

select * from _sentieri WHERE nome = $strx

service angular: sentieri.service.ts
---------------------------------------------------------------------------------------

# Legge eventi



## tipo: 1  
## id_cat:
## strx:  
funzione heler :get_nomigpx(($strx)
--------------------------------------------------------------------------------------
# Legge articoli

## tipo: 2  
## id_cat: categoria articoli
## strx: 
funzione heler :get_articoli(($id_cat)
--------------------------------------------------------------------------------------
# Legge singolo articolo 

## tipo: 3  
## id_cat: id articolo
## strx: 
funzione heler :get_aerticolo(($id_cat)