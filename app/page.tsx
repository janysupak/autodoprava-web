export default function Home() {
  return (
    <main style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.title}>AUTODOPRAVA KRNOV</h1>

          <p style={styles.subtitle}>
            Přeprava sypkých hmot • velkoobjemové kontejnery • až 80 m³
          </p>

          <button style={styles.button}>📞 Zavolat +420 737 88 66 32</button>
        </div>
      </section>

      {/* O FIRMĚ */}
      <section style={styles.split}>
        <div style={styles.textBlock}>
          <h2>Spolehlivá autodoprava</h2>
          <p>
            Specializujeme se na přepravu sypkých materiálů, stavební sutě,
            zeminy a dalších komodit ve velkoobjemových kontejnerech.
          </p>
          <p>
            Nabízíme kontejnery až do <b>80 m³</b> a individuální přístup ke každé zakázce.
          </p>
        </div>

        <img src="/kontejner.jpg" style={styles.image} />
      </section>

      {/* SLUŽBY */}
      <section style={styles.services}>
        <h2>Naše služby</h2>

        <div style={styles.grid}>
          <div style={styles.card}>🚛 Přeprava sypkých materiálů</div>
          <div style={styles.card}>📦 Velkoobjemové kontejnery</div>
          <div style={styles.card}>🏗️ Stavební a zemní práce</div>
          <div style={styles.card}>⚡ Expresní doprava</div>
        </div>
      </section>

      {/* GALERIE */}
      <section style={styles.gallerySection}>
        <h2>Naše technika</h2>

        <div style={styles.gallery}>
          <img src="/preprava.jpg" />
          <img src="/preprava2.jpg" />
          <img src="/kontejner.jpg" />
          <img src="/hero1.jpg" />
        </div>
      </section>

      {/* KONTAKT */}
      <section style={styles.contact}>
        <h2>Kontakt</h2>

        <div style={styles.contactBox}>
          <p>📍 Opavská 593/61, Krnov</p>
          <p>📞 +420 737 88 66 32</p>
          <p>💰 Cena po telefonické domluvě</p>
        </div>
      </section>

    </main>
  );
}

const styles: any = {

  page: {
    fontFamily: "Arial",
    background: "#f4f4f4",
    color: "#111",
  },

  /* HERO */
  hero: {
    height: "90vh",
    backgroundImage: "url('/hero1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  heroOverlay: {
    background: "rgba(0,0,0,0.55)",
    padding: "50px",
    borderRadius: "20px",
    textAlign: "center",
    color: "white",
  },

  title: {
    fontSize: "64px",
    marginBottom: "10px",
    letterSpacing: "2px",
  },

  subtitle: {
    fontSize: "18px",
    opacity: 0.9,
    marginBottom: "20px",
  },

  button: {
    padding: "12px 20px",
    background: "#ff6a00",
    border: "none",
    borderRadius: "10px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },

  /* SPLIT SECTION */
  split: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "40px",
    padding: "80px 10%",
    background: "white",
  },

  textBlock: {
    flex: 1,
    minWidth: "280px",
    fontSize: "18px",
    lineHeight: "1.6",
  },

  image: {
    flex: 1,
    minWidth: "280px",
    width: "100%",
    borderRadius: "16px",
  },

  /* SERVICES */
  services: {
    padding: "80px 10%",
    background: "#111",
    color: "white",
    textAlign: "center",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },

  card: {
    background: "#1c1c1c",
    padding: "20px",
    borderRadius: "12px",
  },

  /* GALLERY */
  gallerySection: {
    padding: "80px 10%",
    background: "#f4f4f4",
    textAlign: "center",
  },

  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px",
    marginTop: "30px",
  },

  /* CONTACT */
  contact: {
    padding: "80px 10%",
    background: "#111",
    color: "white",
    textAlign: "center",
  },

  contactBox: {
    marginTop: "20px",
    display: "inline-block",
    padding: "25px",
    background: "#1c1c1c",
    borderRadius: "12px",
  },
};