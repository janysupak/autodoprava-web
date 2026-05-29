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
            Zabýváme se profesionální přepravou sypkých materiálů,
            odvozem stavební suti a zemních prací
            ve velkoobjemových kontejnerech.
          </p>

          <p style={styles.highlight}>
            ✔ Specializace na objemové přepravy až 80 m³
          </p>

          <p style={styles.text}>
            Nabízíme rychlé přistavení kontejnerů,
            individuální přístup a spolehlivou dopravu
            po domluvě.
          </p>
        </div>
      </section>

      {/* SLUŽBY */}
      <section style={styles.center}>
        <div style={styles.darkCard}>
          <h2 style={styles.h2}>Služby</h2>

          <div style={styles.list}>
            <p>🚛 Přeprava sypkých materiálů</p>
            <p>📦 Velkoobjemové kontejnery až 80 m³</p>
            <p>🏗️ Odvoz stavební suti a zeminy</p>
            <p>⚡ Rychlé přistavení kontejnerů</p>
            <p>📍 Krnov a okolí</p>
            <p>📞 Cena po telefonické domluvě</p>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section style={styles.gallerySection}>
        <h2 style={styles.h2}>Naše technika</h2>

        <div style={styles.gallery}>
          <img src="/kamion1.jpg" style={styles.img} />
          <img src="/kamion2.jpg" style={styles.img} />
          <img src="/kamion3.jpg" style={styles.img} />
          <img src="/kamion4.jpg" style={styles.img} />
          <img src="/kamion5.jpg" style={styles.img} />
          <img src="/kamion6.jpg" style={styles.img} />
        </div>
      </section>

      {/* KONTAKT */}
      <section style={styles.center}>
        <div style={styles.contactCard}>
          <h2 style={styles.h2}>Kontakt</h2>

          <p style={styles.contactText}>
            📍 Opavská 593/61, Krnov
          </p>

          <p style={styles.phone}>
            📞 +420 737 88 66 32
          </p>

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
    fontFamily: "Arial, sans-serif",
    background: "#0b0f14",
    color: "white",
  },

  /* HERO */
  hero: {
    height: "92vh",
    backgroundImage: "url('/hero1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },

  heroCard: {
    background: "rgba(0,0,0,0.72)",
    padding: "50px",
    borderRadius: "20px",
    textAlign: "center",
    maxWidth: "760px",
    backdropFilter: "blur(4px)",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  title: {
    fontSize: "60px",
    marginBottom: "15px",
    letterSpacing: "2px",
  },

  subtitle: {
    fontSize: "20px",
    opacity: 0.9,
    lineHeight: "1.6",
  },

  cta: {
    marginTop: "25px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ffb300",
  },

  /* SECTION */
  center: {
    display: "flex",
    justifyContent: "center",
    padding: "80px 20px",
  },

  card: {
    maxWidth: "820px",
    background: "#111827",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    border: "1px solid #1f2937",
    boxShadow: "0 0 30px rgba(0,0,0,0.3)",
  },

  darkCard: {
    maxWidth: "820px",
    background: "#0f172a",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    border: "1px solid #243041",
    boxShadow: "0 0 30px rgba(0,0,0,0.3)",
  },

  contactCard: {
    maxWidth: "820px",
    background: "#111827",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    border: "1px solid #243041",
    boxShadow: "0 0 30px rgba(0,0,0,0.3)",
  },

  h2: {
    fontSize: "38px",
    marginBottom: "25px",
  },

  text: {
    fontSize: "18px",
    opacity: 0.9,
    lineHeight: "1.9",
    marginBottom: "20px",
  },

  highlight: {
    color: "#ffb300",
    fontWeight: "bold",
    fontSize: "18px",
    marginTop: "15px",
  },

  list: {
    textAlign: "left",
    maxWidth: "520px",
    margin: "0 auto",
    lineHeight: "2.3",
    fontSize: "18px",
  },

  /* GALERIE */
  gallerySection: {
    padding: "80px 20px",
    textAlign: "center",
  },

  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "18px",
    maxWidth: "1200px",
    margin: "40px auto 0",
  },

  img: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    borderRadius: "16px",
    border: "1px solid #1f2937",
    transition: "0.3s",
  },

  contactText: {
    fontSize: "18px",
    marginBottom: "15px",
  },

  phone: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#ffb300",
    marginBottom: "20px",
  },
};