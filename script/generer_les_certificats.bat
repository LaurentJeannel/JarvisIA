@echo off
echo
echo ******************* ATTENTION ********************
echo

echo Vous allez g�n�rer les certificats SSL pour jarvis et �craser les fichiers actuels. 
pause Appuyez sur CTRL-C maintenant pour annuler !
openssl req -x509 -config "C:\JarvisIA\script\bin\openssl.cnf" -newkey rsa:2048 -keyout key.pem -out cert.pem -days 3650 -nodes -subj "/C=FR/ST=jarvispage/L=jarvispage/O=jarvispage/OU=jarvispage/CN=127.0.0.1"
del .rnd
echo Les certificats ont �t� g�n�r�s pour 10 ans ! 
echo Vous etes pret a utiliser les plugins bas�s sur SCRIBE !
pause
exit