const games = [
    {
        "id":"1",
        "Title": "DESTINY 2: THE FINAL SHAPE + ANNUAL PASS",
        "Title_URL": "https://www.humblebundle.com/store/destiny-2-the-final-shape-annual-pass",
        "Image": "https://hb.imgix.net/1ae06aac01295b51c6115a93d7b045e226d85c05.jpg?auto=compress,format&fit=crop&h=206&w=360&s=c75e32ec75be583a0beb6d6b4f88aeba",
        "Price": "99,99 $",
        "Status": "\n        Hacer un pedido\n      "
    },
    {
        "id":"2",
        "Title": "GHOST OF TSUSHIMA DIRECTOR'S CUT",
        "Title_URL": "https://www.humblebundle.com/store/ghost-of-tsushima-directors-cut",
        "Image": "https://hb.imgix.net/545b3abace45a46807a3ef91853d1eba12e3e867.jpg?auto=compress,format&fit=crop&h=206&w=360&s=44957c66405716bf8b9970bb5d903e19",
        "Price": "59,99 $",
        "Status": ""
    },
    {   
        "id":"3",
        "Title": "MANOR LORDS",
        "Title_URL": "https://www.humblebundle.com/store/manor-lords",
        "Image": "https://hb.imgix.net/138946191e27ccd9339d8bd66bfc2dc70952d274.jpg?auto=compress,format&fit=crop&h=206&w=360&s=4090162631bc86258f58d27fe8dc60f5",
        "Price": "29,99 $",
        "Status": ""
    },
    {
        "id":"4",
        "Title": "ELDEN RING SHADOW OF THE ERDTREE",
        "Title_URL": "https://www.humblebundle.com/store/elden-ring-shadow-of-the-erdtree",
        "Image": "https://hb.imgix.net/d37da4bf187fde4fc7c5f511c63be2e021ccae4e.jpg?auto=compress,format&fit=crop&h=206&w=360&s=8f49115dc2b5d62456594f4e97ca3141",
        "Price": "39,99 $",
        "Status": "\n        Hacer un pedido\n      "
    },
    {
        "id":"5",
        "Title": "DAVE THE DIVER",
        "Title_URL": "https://www.humblebundle.com/store/dave-the-diver-sale",
        "Image": "https://hb.imgix.net/e3bef60c6a1f08dabcddc34b1f56e48f85be83ff.jpg?auto=compress,format&fit=crop&h=206&w=360&s=3b1a644870cd5e28dbafe10e0ddc2b76",
        "Price": "14,99 $",
        "Status": ""
    },
    {
        "id":"6",
        "Title": "DESTINY 2: THE FINAL SHAPE",
        "Title_URL": "https://www.humblebundle.com/store/destiny-2-the-final-shape",
        "Image": "https://hb.imgix.net/f793837126a01658c272f148c5ecae7343ab164d.jpg?auto=compress,format&fit=crop&h=206&w=360&s=1e73ca0cbe9fa37e75f337254c7f95f7",
        "Price": "49,99 $",
        "Status": "\n        Hacer un pedido\n      "
    },
    {
        "id":"7",
        "Title": "HORIZON FORBIDDEN WEST COMPLETE EDITION",
        "Title_URL": "https://www.humblebundle.com/store/horizon-forbidden-west-complete-edition",
        "Image": "https://hb.imgix.net/ff6c2cd2b769febf0ed1dd4f264c17fcf9816e0d.jpg?auto=compress,format&fit=crop&h=206&w=360&s=d3b49d382e6431f9a77619fb056bde72",
        "Price": "59,99 $",
        "Status": ""
    },
    {
        "id":"8",
        "Title": "HELLDIVERS 2",
        "Title_URL": "https://www.humblebundle.com/store/helldivers-2",
        "Image": "https://hb.imgix.net/30de6d6a2fad2f25aa9858199cc57b317aead3e7.jpg?auto=compress,format&fit=crop&h=206&w=360&s=0e1f5b6ca6af1ad6043cf58ad5fca5e0",
        "Price": "39,99 $",
        "Status": ""
    },
    {
        "id":"9",
        "Title": "FINAL FANTASY XIV: DAWNTRAIL",
        "Title_URL": "https://www.humblebundle.com/store/final-fantasy-xiv-dawntrail",
        "Image": "https://hb.imgix.net/a82142ec653e722ac71c4e1d1aad02deff1e9f75.jpg?auto=compress,format&fit=crop&h=206&w=360&s=e2b88c845af9a703aa19cdf1b315be72",
        "Price": "39,99 $",
        "Status": "\n        Hacer un pedido\n      "
    },
    {
        "id":"10",
        "Title": "ABIOTIC FACTOR",
        "Title_URL": "https://www.humblebundle.com/store/abiotic-factor",
        "Image": "https://hb.imgix.net/2f007fbee4bd08ccd93ca0c719a2dc013e56e4da.jpg?auto=compress,format&fit=crop&h=206&w=360&s=11c02e07585629ec6d705d3bbbaccb80",
        "Price": "24,99 $",
        "Status": ""
    },
    {
        "id":"11",
        "Title": "V RISING",
        "Title_URL": "https://www.humblebundle.com/store/v-rising",
        "Image": "https://hb.imgix.net/e2f2afc6a8a71bb19b48c3dc0c34b96aec6cffa4.jpg?auto=compress,format&fit=crop&h=206&w=360&s=5b8d881fb0cd11d76c8aebe951117249",
        "Price": "34,99 $",
        "Status": ""
    },
    {
        "id":"12",
        "Title": "SHIN MEGAMI TENSEI V: VENGEANCE DIGITAL DELUXE EDITION",
        "Title_URL": "https://www.humblebundle.com/store/shin-megami-tensei-v-vengeance-digital-deluxe-edition",
        "Image": "https://hb.imgix.net/e27c2e5d53f768abc3c8c71b11a407daeb74d9cc.png?auto=compress,format&fit=crop&h=206&w=360&s=0303215c28a552fdd017840fd4ca6540",
        "Price": "69,99 $",
        "Status": "\n        Hacer un pedido\n      "
    },
    {
        "id":"13",
        "Title": "ELDEN RING SHADOW OF THE ERDTREE EDITION",
        "Title_URL": "https://www.humblebundle.com/store/elden-ring-shadow-of-the-erdtree-edition",
        "Image": "https://hb.imgix.net/419a1844be888a00151fd923aebf017c53f672b4.jpg?auto=compress,format&fit=crop&h=206&w=360&s=15a666f2321a610024468fe9e70394b7",
        "Price": "79,99 $",
        "Status": "\n        Hacer un pedido\n      "
    },
    {
        "id":"14",
        "Title": "HI-FI RUSH DELUXE EDITION UPGRADE PACK",
        "Title_URL": "https://www.humblebundle.com/store/hifi-rush-deluxe-edition-upgrade-pack",
        "Image": "https://hb.imgix.net/d8271f0f6a6d941df9700c45aba2bb209ce06142.jpg?auto=compress,format&fit=crop&h=206&w=360&s=4a44dc4576796efb9d21db00f533c883",
        "Price": "9,99 $",
        "Status": ""
    },
    {
        "id":"15",
        "Title": "GRAY ZONE WARFARE",
        "Title_URL": "https://www.humblebundle.com/store/gray-zone-warfare",
        "Image": "https://hb.imgix.net/018159b840dee28880341e6b9c385ff9bf704868.jpg?auto=compress,format&fit=crop&h=206&w=360&s=69de51106b6ce4834acd051b7e44c722",
        "Price": "34,99 $",
        "Status": ""
    },
    {
        "id":"16",
        "Title": "BEAT SABER",
        "Title_URL": "https://www.humblebundle.com/store/beat-saber",
        "Image": "https://hb.imgix.net/d5819280b8eba6df5b9f66400c535ae4e84a0976.jpeg?auto=compress,format&fit=crop&h=206&w=360&s=78bc8711448f6eb56e8f19560ea54c81",
        "Price": "29,99 $",
        "Status": ""
    },
    {
        "id":"17",
        "Title": "YAKUZA: LIKE A DRAGON ULTIMATE COSTUME SET",
        "Title_URL": "https://www.humblebundle.com/store/yakuza-like-a-dragon-ultimate-costume-set",
        "Image": "https://hb.imgix.net/a62dec74063fcf2f0e71c85ccd0aa2fe33a852a8.jpeg?auto=compress,format&fit=crop&h=206&w=360&s=85a13e82ab3cd604818f933aa198eba0",
        "Price": "14,99 $",
        "Status": ""
    },
    {
        "id":"18",
        "Title": "FINAL FANTASY XIV: DAWNTRAIL - DIGITAL COLLECTOR'S EDITION",
        "Title_URL": "https://www.humblebundle.com/store/final-fantasy-xiv-dawntrail-digital-collectors-edition",
        "Image": "https://hb.imgix.net/77d0fdcda0390fddf874bc8fe5dc413d5496e63d.jpg?auto=compress,format&fit=crop&h=206&w=360&s=c22866017d04ac7b86e29c6df58685c5",
        "Price": "59,99 $",
        "Status": "\n        Hacer un pedido\n      "
    },
    {
        "id":"19",
        "Title": "VINTAGE STORY",
        "Title_URL": "https://www.humblebundle.com/store/vintage-story",
        "Image": "https://hb.imgix.net/4c6769c0d7eeb4bd7ef1405aa2a127ff75512cac.jpg?auto=compress,format&fit=crop&h=206&w=360&s=9721704b687a833e91d4b4d9642d57bd",
        "Price": "25,00 $",
        "Status": ""
    },
    {
        "id":"20",
        "Title": "SUNKENLAND",
        "Title_URL": "https://www.humblebundle.com/store/sunkenland",
        "Image": "https://hb.imgix.net/f2bfd7c880577ac98638882d56273f1c84a125f8.jpg?auto=compress,format&fit=crop&h=206&w=360&s=d47ed2a3fd4c7c44fbc01dc4935eafb2",
        "Price": "15,99 $",
        "Status": ""
    },
    {
        "id":"21",
        "Title": "SATURNALIA",
        "Title_URL": "https://www.humblebundle.com/store/saturnalia",
        "Image": "https://hb.imgix.net/aaa15f73f8f698c27a4c24339f20ef6cad6a0501.jpg?auto=compress,format&fit=crop&h=206&w=360&s=d9e2242d3c1e9b8eb4ffccb49cc6b2ca",
        "Price": "19,99 $",
        "Status": ""
    },
    {
        "id":"22",
        "Title": "YAKUZA: LIKE A DRAGON KARAOKE SET",
        "Title_URL": "https://www.humblebundle.com/store/yakuza-like-a-dragon-karaoke-set",
        "Image": "https://hb.imgix.net/412d08b69473062ecf70d4b9c2d680bf16b47f42.jpeg?auto=compress,format&fit=crop&h=206&w=360&s=f3a0c102bc8527990db91c53c7afc01e",
        "Price": "14,99 $",
        "Status": ""
    },
    {
        "id":"23",
        "Title": "DESTINY 2: LIGHTFALL + ANNUAL PASS",
        "Title_URL": "https://www.humblebundle.com/store/destiny-2-lightfall-and-annual-pass",
        "Image": "https://hb.imgix.net/a3b045c5f8e46bc416bf6ed6df8143952d2497ce.PNG?auto=compress,format&fit=crop&h=206&w=360&s=093410ea51bb3d6acdda12cc320e1cdd",
        "Price": "19,99 $",
        "Status": ""
    },
    {
        "id":"24",
        "Title": "RAVENSWATCH",
        "Title_URL": "https://www.humblebundle.com/store/ravenswatch",
        "Image": "https://hb.imgix.net/22ab56d29a0a2a1245ee5e549be73585f02c00fd.jpg?auto=compress,format&fit=crop&h=206&w=360&s=8a51bc926da8298f1593134b23a4d2a9",
        "Price": "15,99 $",
        "Status": ""
    },
    {
        "id":"25",
        "Title": "YAKUZA: LIKE A DRAGON MANAGEMENT MODE SET",
        "Title_URL": "https://www.humblebundle.com/store/yakuza-like-a-dragon-management-mode-set",
        "Image": "https://hb.imgix.net/5629e5fa87dfbb46f205cc70bb75ce1cff745789.jpeg?auto=compress,format&fit=crop&h=206&w=360&s=563e49da2fa610ff50c4d64b4101c19c",
        "Price": "9,99 $",
        "Status": ""
    },
    {
        "id":"26",
        "Title": "PERSONA 3 RELOAD: EXPANSION PASS",
        "Title_URL": "https://www.humblebundle.com/store/persona-3-reload-expansion-pass",
        "Image": "https://hb.imgix.net/3daec6526c24418d8efc587e4159cbae6c81d5a5.jpg?auto=compress,format&fit=crop&h=206&w=360&s=85b27bd1a9e57798479243c621033a50",
        "Price": "34,99 $",
        "Status": ""
    },
    {
        "id":"27",
        "Title": "REUS 2",
        "Title_URL": "https://www.humblebundle.com/store/reus-2",
        "Image": "https://hb.imgix.net/d949b7905dfec8d96a90ea7a1241da6f6c3af996.jpg?auto=compress,format&fit=crop&h=206&w=360&s=6d95de40a2acf83f3a31997c40ac7685",
        "Price": "22,49 $",
        "Status": ""
    },
    {
        "id":"28",
        "Title": "ELDEN RING SHADOW OF THE ERDTREE PREMIUM BUNDLE",
        "Title_URL": "https://www.humblebundle.com/store/elden-ring-shadow-of-the-erdtree-premium-bundle",
        "Image": "https://hb.imgix.net/10cb5e3c8b94fa7c8520782a238ec57ebeff5601.jpg?auto=compress,format&fit=crop&h=206&w=360&s=021c86432afa5281b88bd062a874f733",
        "Price": "49,99 $",
        "Status": "\n        Hacer un pedido\n      "
    },
    {
        "id":"29",
        "Title": "FACTORIO",
        "Title_URL": "https://www.humblebundle.com/store/factorio",
        "Image": "https://hb.imgix.net/368cd1a0b8a818d31d10ef8f45c17f05e6f8ef78.jpg?auto=compress,format&fit=crop&h=206&w=360&s=1715ef5921d9726ab42bacd67e1b3def",
        "Price": "35,00 $",
        "Status": ""
    },
    {
        "id":"30",
        "Title": "THE ELDER SCROLLS ONLINE DELUXE UPGRADE: GOLD ROAD",
        "Title_URL": "https://www.humblebundle.com/store/the-elder-scrolls-online-deluxe-upgrade-gold-road",
        "Image": "https://hb.imgix.net/ef0e0eb335d1654b9345c05f248d16301918c614.jpg?auto=compress,format&fit=crop&h=206&w=360&s=06746deac824c2d4d8e48814bfe6e7ad",
        "Price": "49,99 $",
        "Status": "\n        Hacer un pedido\n      "
    }
];

module.exports = { games };