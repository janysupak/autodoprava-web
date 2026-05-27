export default function Home() {
  return (
    <main style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroBox}>
          <h1 style={styles.title}>AUTODOPRAVA KRNOV</h1>

          <p style={styles.subtitle}>
            Přeprava sypkých hmot ve velkoobjemových kontejnerech
          </p>

          <p style={styles.bigText}>
            Až <b>80 m³</b> • kontejnery • rychlá doprava • spolehlivý servis
          </p>
        </div>
      </section>

      {/* SLUŽBY */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Naše služby</h2>

        <div style={styles.grid}>
          <div style={styles.card}>🚛 Přeprava sypkých materiálů</div>
          <div style={styles.card}>📦 Velkoobjemové kontejnery</div>
          <div style={styles.card}>⚙️ Až 80 m³ kapacita</div>
          <div style={styles.card}>🏗️ Stavební a zemní materiál</div>
          <div style={styles.card}>📞 Individuální zakázky</div>
          <div style={styles.card}>⚡ Rychlá domluva</div>
        </div>
      </section>

      {/* KONTEJNERY INFO */}
      <section style={styles.dark}>
        <h2 style={styles.h2}>Velkoobjemové kontejnery</h2>

        <div style={styles.box}>
          <p>
            Specializujeme se na přepravu a pronájem velkoobjemových kontejnerů
            pro sypké materiály, stavební suť, zeminu a další náklady.
          </p>

          <p style={{ marginTop: "15px" }}>
            💡 <b>Cena dle telefonické domluvy</b>
          </p>
        </div>
      </section>

      {/* KONTAKT */}
      <section style={styles.contact}>
        <h2 style={styles.h2}>Kontakt</h2>

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
    fontFamily: "Arial, sans-serif",
    background: "#0b1220",
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
  },

  heroBox: {
    background: "rgba(0,0,0,0.65)",
    padding: "40px",
    borderRadius: "18px",
    maxWidth: "800px",
    backdropFilter: "blur(6px)",
  },

  title: {
    fontSize: "60px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "20px",
    opacity: 0.9,
    marginBottom: "10px",
  },

  bigText: {
    fontSize: "16px",
    opacity: 0.8,
  },

  section: {
    padding: "80px 20px",
    textAlign: "center",
  },

  dark: {
    padding: "80px 20px",
    textAlign: "center",
    background: "#0f172a",
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
    borderRadius: "14px",
  },

  box: {
    maxWidth: "600px",
    margin: "0 auto",
    background: "rgba(255,255,255,0.05)",
    padding: "25px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.1)",
    lineHeight: "1.7",
  },

  contact: {
    padding: "80px 20px",
    textAlign: "center",
  },

  contactBox: {
    maxWidth: "420px",
    margin: "0 auto",
    background: "rgba(255,255,255,0.05)",
    padding: "25px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.1)",
    lineHeight: "1.8",
  },
};