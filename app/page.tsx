export default function Home() {
  return (
    <main style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.overlay}>
          <h1 style={styles.title}>AUTODOPRAVA KRNOV</h1>

          <p style={styles.subtitle}>
            Spolehlivá doprava a rychlé služby
          </p>
        </div>
      </section>

      {/* SLUŽBY */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Naše služby</h2>

        <div style={styles.serviceBox}>
          <p style={styles.serviceText}>
            ✔ Vnitrostátní autodoprava
          </p>

          <p style={styles.serviceText}>
            ✔ Převoz materiálu a zboží
          </p>

          <p style={styles.serviceText}>
            ✔ Rychlá doprava po domluvě
          </p>

          <p style={styles.serviceText}>
            ✔ Individuální přístup ke každé zakázce
          </p>

          <p style={styles.serviceText}>
            ✔ Spolehlivost a férové ceny
          </p>
        </div>
      </section>

      {/* GALERIE */}
      <section style={styles.dark}>
        <h2 style={styles.h2}>Naše vozidla</h2>

        <div style={styles.gallery}>
          <img src="/preprava.jpg" style={styles.img} />
          <img src="/kontejner.jpg" style={styles.img} />
          <img src="/preprava2.jpg" style={styles.img} />
        </div>
      </section>

      {/* KONTAKT */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Kontakt</h2>

        <div style={styles.contactBox}>
          <p>📞 737 886 632</p>
          <p>📍 Krnov a okolí</p>
          <p>⚡ Rychlé jednání</p>
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
    height: "70vh",
    backgroundImage: "url('/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  overlay: {
    background: "rgba(0,0,0,0.65)",
    padding: "40px",
    borderRadius: "18px",
  },

  title: {
    fontSize: "56px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "20px",
    opacity: 0.9,
  },

  section: {
    padding: "90px 20px",
    textAlign: "center",
  },

  dark: {
    padding: "90px 20px",
    background: "#111827",
    textAlign: "center",
  },

  h2: {
    fontSize: "38px",
    marginBottom: "35px",
  },

  serviceBox: {
    maxWidth: "900px",
    margin: "0 auto",
    background: "#111827",
    padding: "35px",
    borderRadius: "18px",
    textAlign: "left",
    lineHeight: "2",
  },

  serviceText: {
    fontSize: "22px",
    marginBottom: "15px",
  },

  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  img: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    borderRadius: "18px",
  },

  contactBox: {
    maxWidth: "500px",
    margin: "0 auto",
    background: "#111827",
    padding: "30px",
    borderRadius: "18px",
    lineHeight: "2",
    fontSize: "22px",
  },
};