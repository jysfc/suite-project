const allInsecurePasswords = [
   { id: 1, text: `123456` },
   { id: 2, text: `password` },
   { id: 3, text: `12345678` },
   { id: 4, text: `qwerty` },
   { id: 5, text: `123456789` },
   { id: 6, text: `12345` },
   { id: 7, text: `1234` },
   { id: 8, text: `111111` },
   { id: 9, text: `1234567` },
   { id: 10, text: `dragon` },
   { id: 11, text: `123123` },
   { id: 12, text: `baseball` },
   { id: 13, text: `abc123` },
   { id: 14, text: `football` },
   { id: 15, text: `monkey` },
   { id: 16, text: `letmein` },
   { id: 17, text: `696867` },
   { id: 18, text: `shadow` },
   { id: 19, text: `master` },
   { id: 20, text: `666666` },
   { id: 21, text: `qwertyuiop` },
   { id: 22, text: `123321` },
   { id: 23, text: `mustang` },
   { id: 24, text: `1234567890` },
   { id: 25, text: `michaeljordan` },
   { id: 26, text: `654321` },
   { id: 27, text: `superman` },
   { id: 28, text: `1qaz2wsx` },
   { id: 29, text: `999999999` },
   { id: 30, text: `121212` },
   { id: 31, text: `000000` },
   { id: 32, text: `qazwsx` },
   { id: 33, text: `123qwe` },
   { id: 34, text: `killer` },
   { id: 35, text: `trustno1m8` },
   { id: 36, text: `jordan` },
   { id: 37, text: `jennifer` },
   { id: 38, text: `zxcvbnm` },
   { id: 39, text: `asdfgh` },
   { id: 40, text: `hunter` },
   { id: 41, text: `buster` },
   { id: 42, text: `soccer` },
   { id: 43, text: `harley` },
   { id: 44, text: `batman` },
   { id: 45, text: `andrew` },
   { id: 46, text: `tigger` },
   { id: 47, text: `sunshine` },
   { id: 48, text: `iloveyou` },
   { id: 49, text: `2000` },
   { id: 50, text: `charlie` },
   { id: 51, text: `robert` },
   { id: 52, text: `thomas` },
   { id: 53, text: `hockey` },
   { id: 54, text: `ranger` },
   { id: 55, text: `harrypotter` },
   { id: 56, text: `starwars` },
   { id: 57, text: `klaster` },
   { id: 58, text: `112233` },
   { id: 59, text: `george` },
   { id: 60, text: `computer` },
   { id: 61, text: `michelle` },
   { id: 62, text: `jessica` },
   { id: 63, text: `pepper` },
   { id: 64, text: `1111` },
   { id: 65, text: `zxcvbn` },
   { id: 66, text: `555555` },
   { id: 67, text: `11111111` },
   { id: 68, text: `131313` },
   { id: 69, text: `freedom` },
   { id: 70, text: `777777` },
   { id: 71, text: `pass` },
   { id: 72, text: `maggie` },
   { id: 73, text: `159753` },
   { id: 74, text: `aaaaaa` },
   { id: 75, text: `ginger` },
   { id: 76, text: `princess` },
   { id: 77, text: `joshua` },
   { id: 78, text: `cheese` },
   { id: 79, text: `amanda` },
   { id: 80, text: `summer` },
   { id: 81, text: `love` },
   { id: 82, text: `ashley` },
   { id: 83, text: `nicole` },
   { id: 84, text: `chelsea` },
   { id: 85, text: `biteme` },
   { id: 86, text: `matthew` },
   { id: 87, text: `access` },
   { id: 88, text: `yankees` },
   { id: 89, text: `987654321` },
   { id: 90, text: `dallas` },
   { id: 91, text: `austin` },
   { id: 92, text: `thunder` },
   { id: 93, text: `taylor` },
   { id: 94, text: `matrix` },
   { id: 95, text: `minecraft` },
];

const formattedAllInsecurePasswords = allInsecurePasswords.map((password) => {
   const newAllInsecurePasswords = password.text;
   return newAllInsecurePasswords;
});
// console.log(formattedAllInsecurePasswords);
// console.log(allInsecurePasswords);