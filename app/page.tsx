export default function Home() {
  return (
    <main style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroBox}>
          <h1 style={styles.title}>PNEUSERVIS KRNOV</h1>

          <p style={styles.subtitle}>
            Rychlý a spolehlivý pneuservis pro osobní i dodávky
          </p>

          <p style={styles.badges}>
            🔧 přezutí • ⚙️ vyvážení • 🚗 opravy defektů • ⏱️ expres servis
          </p>
        </div>
      </section>

      {/* INFO */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Proč právě my</h2>

        <div style={styles.grid}>
          <div style={styles.card}>⚡ Rychlé objednání i bez čekání</div>
          <div style={styles.card}>💰 Férové ceny bez skrytých poplatků</div>
          <div style={styles.card}>🔧 Profesionální vybavení</div>
          <div style={styles.card}>🚗 Osobní i dodávkové vozy</div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section style={styles.dark}>
        <h2 style={styles.h2}>Služby</h2>

        <div style={styles.grid}>
          <div style={styles.card}>Přezutí pneumatik</div>
          <div style={styles.card}>Vyvážení kol</div>
          <div style={styles.card}>Opravy defektů</div>
          <div style={styles.card}>Kontrola tlaku</div>
          <div style={styles.card}>Sezónní uskladnění</div>
          <div style={styles.card}>Expresní servis</div>
        </div>
      </section>

      {/* OTEVÍRACÍ DOBA */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Otevírací doba</h2>

        <div style={styles.box}>
          <p>Pondělí – Pátek: 9:00 – 17:00</p>
          <p>Sobota: 9:00 – 14:00</p>
          <p>Neděle: po domluvě</p>
          <br />
          <b>Nonstop po telefonické domluvě</b>
        </div>
      </section>

      {/* KONTAKT */}
      <section style={styles.contact}>
        <h2 style={styles.h2}>Kontakt</h2>

        <div style={styles.contactBox}>
          <p>📍 Opavská 593/61, Krnov</p>
          <p>📞 737 886 632</p>
          <p>⚡ Rychlá domluva – zavolej kdykoliv</p>
        </div>
      </section>

    </main>
  );
}

const styles: any = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: "#0a0f1c",
    color: "white",
  },

  hero: {
    height: "90vh",
    backgroundImage: "url('/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "relative",
  },

  heroBox: {
    background: "rgba(0,0,0,0.65)",
    padding: "40px",
    borderRadius: "20px",
    maxWidth: "800px",
    backdropFilter: "blur(6px)",
  },

  title: {
    fontSize: "60px",
    marginBottom: "10px",
    letterSpacing: "2px",
  },

  subtitle: {
    fontSize: "18px",
    opacity: 0.9,
    marginBottom: "15px",
  },

  badges: {
    fontSize: "14px",
    opacity: 0.8,
  },

  section: {
    padding: "80px 20px",
    textAlign: "center",
  },

  dark: {
    padding: "80px 20px",
    background: "#0f172a",
    textAlign: "center",
  },

  h2: {
    fontSize: "34px",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "20px",
    borderRadius: "16px",
    backdropFilter: "blur(4px)",
  },

  box: {
    maxWidth: "420px",
    margin: "0 auto",
    background: "rgba(255,255,255,0.05)",
    padding: "25px",
    borderRadius: "16px",
    lineHeight: "1.8",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  contact: {
    padding: "80px 20px",
    textAlign: "center",
    background: "#0a0f1c",
  },

  contactBox: {
    maxWidth: "420px",
    margin: "0 auto",
    background: "rgba(255,255,255,0.05)",
    padding: "25px",
    borderRadius: "16px",
    lineHeight: "1.8",
    border: "1px solid rgba(255,255,255,0.1)",
  },
};