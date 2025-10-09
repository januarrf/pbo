class motor {
constructor(merk, warna) {
this.merk = merk;
this.warna = warna;
}
info() {
return `motor ini adalah ${this.merk} berwarna ${this.warna}.`;
}
}
const aerox = new motor("motor aerox", "Hitam");
console.log(aerox.info());
