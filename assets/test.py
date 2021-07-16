import json
string = '''EKONOMI
ENDAH
PEND. AGAMA
AHMAD / RATNA
BK
RATNA SARI

BHS. INDO
ELFI
MATH
MAYA
GEOGRAFI
WALDI

SEJARAH WAJIB
DINNAH
PPKN
HASAN
BHS. JPG_LM
RATIH BU

SEJARAH MINAT
JAMIL
BHS. INGG WAJIB
MAYA
SOSIO
RATIH TS

PJOK
DHANU
PKWU
KRESNA
SENI BUDAYA
SUMI
'''

string = string.split('\n\n')

output = [
    {
        "no": 1,
        "day": "Monday",
        "outfit": "Putih abu-abu",
        "status": "masuk",
        "subjects": [{
            "no": 1,
            "name": "Matematika",
            "from": "07:00",
            "to": "08:10",
            "teacher": "Bu Porman"
            }, {
            "no": 2,
            "name": "Biologi",
            "from": "08:40",
            "to": "09:50",
            "teacher": "Pak Budi"
            }, {
            "no": 3,
            "name": "BK",
            "from": "10:20",
            "to": "11:30",
            "teacher": "Pak Zein"
        }]
    },
    {
        "no": 2,
        "day": "Tuesday",
        "outfit": "Putih abu-abu",
        "status": "masuk",
        "subjects": [{
            "no": 1,
            "name": "BHS Jepang",
            "from": "07:00",
            "to": "08:10",
            "teacher": "Bu Ratih"
            }, {
            "no": 2,
            "name": "Fisika",
            "from": "08:40",
            "to": "09:50",
            "teacher": "Pak Auliya"
            }, {
            "no": 3,
            "name": "PKWU",
            "from": "10:20",
            "to": "11:30",
            "teacher": "Bu Suci"
        }]
    },
    {
        "no": 3,
        "day": "Wednesday",
        "outfit": "Pramuka",
        "status": "masuk",
        "subjects": [{
            "no": 1,
            "name": "PPKN",
            "from": "07:00",
            "to": "08:10",
            "teacher": "Pak Hasan"
            }, {
            "no": 2,
            "name": "Agama",
            "from": "08:40",
            "to": "09:50",
            "teacher": "Pak Ahmad/Bu Ratna"
            }, {
            "no": 3,
            "name": "BHS Indo",
            "from": "10:20",
            "to": "11:30",
            "teacher": "Bu Salbi"
        }]
    },
    {
        "no": 4,
        "day": "Thursday",
        "outfit": "Batik",
        "status": "masuk",
        "subjects": [{
            "no": 1,
            "name": "PJOK",
            "from": "07:00",
            "to": "08:10",
            "teacher": "Pak Umar"
            }, {
            "no": 2,
            "name": "Seni Budaya",
            "from": "08:40",
            "to": "09:50",
            "teacher": "Bu Sumi"
            }, {
            "no": 3,
            "name": "Mat Minat",
            "from": "10:20",
            "to": "11:30",
            "teacher": "Pak Rahmat"
        }]
    },
    {
        "no": 5,
        "day": "Friday",
        "outfit": "Baju kokoh",
        "status": "masuk",
        "subjects": [{
            "no": 1,
            "name": "BHS Inggris",
            "from": "07:00",
            "to": "08:10",
            "teacher": "Bu Maya"
            }, {
            "no": 2,
            "name": "Kimia",
            "from": "08:40",
            "to": "09:50",
            "teacher": "Bu Riza"
            }, {
            "no": 3,
            "name": "Sejarah",
            "from": "10:20",
            "to": "11:30",
            "teacher": "Bu Dinnah"
        }]
    },
    {
        "no": 6,
        "day": "Saturday",
        "status": "libur"
    },
    {
        "no": 7,
        "day": "Sunday",
        "status": "libur"

    }
]
for [i,lines] in enumerate(string):
  lines = lines.split('\n')
  newdata = {
            "no": 1,
            "name": lines[0],
            "from": "07:00",
            "to": "08:10",
            "teacher": lines[1],
            }, {
            "no": 2,
            "name": lines[2],
            "from": "08:40",
            "to": "09:50",
            "teacher": lines[3],
            }, {
            "no": 3,
            "name": lines[4],
            "from": "10:20",
            "to": "11:30",
            "teacher": lines[5],
        }
  

  output[i]['subjects'] = newdata

print(json.dumps(output))