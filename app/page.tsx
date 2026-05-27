export default function Home() {
  return (
    <main style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroCard}>
          <h1 style={styles.title}>AUTODOPRAVA KRNOV</h1>

          <p style={styles.subtitle}>
            Přeprava sypkých hmot • velkoobjemové kontejnery • až 80 m³
          </p>

          <p style={styles.cta}>
            📞 +420 737 88 66 32
          </p>
        </div>
      </section>

      {/* INFO BOX */}
      <section style={styles.center}>
        <div style={styles.infoBox}>
          <h2>O nás</h2>
          <p>
            Specializujeme se na přepravu sypkých materiálů a zemních prací
            ve velkoobjemových kontejnerech.
          </p>
          <p>
            Nabízíme kontejnery až <b>80 m³</b> a individuální přístup ke každé zakázce.
          </p>
        </div>
      </section>

      {/* SLUŽBY BOX */}
      <section style={styles.center}>
        <div style={styles.infoBoxDark}>
          <h2>Služby</h2>

          <p>🚛 Přeprava sypkých materiálů</p>
          <p>📦 Velkoobjemové kontejnery</p>
          <p>🏗️ Stavební suť a zemina</p>
          <p>⚡ Rychlé zakázky po domluvě</p>
        </div>
      </section>

      {/* GALERIE (jen 3 fotky) */}
      <section style={styles.gallerySection}>
        <h2>Naše technika</h2>

        <div style={styles.gallery}>
          <img src="/hero1.jpg" />
          <img src="/preprava.jpg" />
          <img src="/kontejner.jpg" />
        </div>
      </section>

      {/* KONTAKT */}
      <section style={styles.center}>
        <div style={styles.contactBox}>
          <h2>Kontakt</h2>
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
    background: "#0b0f14",
    color: "white",
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

  heroCard: {
    background: "rgba(0,0,0,0.7)",
    padding: "50px",
    borderRadius: "18px",
    textAlign: "center",
    maxWidth: "700px",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  title: {
    fontSize: "58px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
    opacity: 0.85,
  },

  cta: {
    marginTop: "20px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#ff7a00",
  },

  /* CENTER WRAPPERS */
  center: {
    display: "flex",
    justifyContent: "center",
    padding: "70px 20px",
  },

  infoBox: {
    maxWidth: "700px",
    background: "white",
    color: "black",
    padding: "30px",
    borderRadius: "14px",
    textAlign: "center",
    lineHeight: "1.6",
  },

  infoBoxDark: {
    maxWidth: "700px",
    background: "#151b22",
    padding: "30px",
    borderRadius: "14px",
    textAlign: "center",
    border: "1px solid #2a3440",
    lineHeight: "1.8",
  },

  contactBox: {
    maxWidth: "700px",
    background: "#151b22",
    padding: "30px",
    borderRadius: "14px",
    textAlign: "center",
    border: "1px solid #2a3440",
    lineHeight: "1.8",
  },

  /* GALLERY */
  gallerySection: {
    padding: "70px 20px",
    textAlign: "center",
  },

  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px",
    maxWidth: "900px",
    margin: "30px auto 0",
  },
};