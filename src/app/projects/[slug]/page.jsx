export default function ProjectPage({ params }) {
  const { slug } = params;

  return (
    <main>
      <h1>Project: {slug}</h1>
      <p>This is the project detail page for the selected project slug.</p>
    </main>
  );
}
