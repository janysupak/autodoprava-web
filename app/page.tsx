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

      {/* O NÁS */}
      <section style={styles.center}>
        <div style={styles.card}>
          <h2 style={styles.h2}>O nás</h2>

          <p style={styles.text}>
            Zabýváme se profesionální přepravou sypkých materiálů a zemních prací
            ve velkoobjemových kontejnerech.
          </p>

          <p style={styles.highlight}>
            ✔ Specializace na objemové přepravy až 80 m³
          </p>

          <p style={styles.text}>
            Každou zakázku řešíme individuálně podle typu materiálu a požadavků zákazníka.
          </p>
        </div>
      </section>

      {/* SLUŽBY */}
      <section style={styles.center}>
        <div style={styles.darkCard}>
          <h2 style={styles.h2}>Služby</h2>

          <div style={styles.list}>
            <p>🚛 Přeprava sypkých materiálů</p>
            <p>📦 Velkoobjemové kontejnery (až 80 m³)</p>
            <p>🏗️ Odvoz stavební suti a zeminy</p>
            <p>⚡ Rychlé přistavení kontejneru</p>
            <p>📍 Doprava Krnov a okolí</p>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section style={styles.gallerySection}>
        <h2 style={styles.h2}>Naše technika</h2>

        <div style={styles.gallery}>
          <img src="/hero1.jpg" />
          <img src="/preprava.jpg" />
          <img src="/kontejner.jpg" />
        </div>
      </section>

      {/* KONTAKT */}
      <section style={styles.center}>
        <div style={styles.card}>
          <h2 style={styles.h2}>Kontakt</h2>

          <p style={styles.text}>📍 Opavská 593/61, Krnov</p>
          <p style={styles.text}>📞 +420 737 88 66 32</p>

          <p style={styles.highlight}>
            💰 Cena vždy po telefonické domluvě
          </p>
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
    background: "rgba(0,0,0,0.75)",
    padding: "50px",
    borderRadius: "18px",
    textAlign: "center",
    maxWidth: "700px",
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
    color: "#ffb300",
  },

  center: {
    display: "flex",
    justifyContent: "center",
    padding: "70px 20px",
  },

  card: {
    maxWidth: "750px",
    background: "#111827",
    padding: "35px",
    borderRadius: "16px",
    textAlign: "center",
    lineHeight: "1.7",
    border: "1px solid #222b38",
  },

  darkCard: {
    maxWidth: "750px",
    background: "#0f172a",
    padding: "35px",
    borderRadius: "16px",
    textAlign: "center",
    lineHeight: "1.8",
    border: "1px solid #243041",
  },

  h2: {
    fontSize: "34px",
    marginBottom: "20px",
  },

  text: {
    opacity: 0.85,
    fontSize: "16px",
    marginBottom: "12px",
  },

  highlight: {
    color: "#ffb300",
    fontWeight: "bold",
    margin: "15px 0",
  },

  list: {
    textAlign: "left",
    maxWidth: "500px",
    margin: "0 auto",
    lineHeight: "2",
  },

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