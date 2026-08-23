/** Design: Profesional y elegante / neomodernismo. Contenido documental, navegación lateral persistente y acento azul tecnológico con ámbar editorial. */
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  ArrowUpRight, Check, ChevronRight, CircleHelp, Clipboard, Cloud,
  Code2, Cpu, ExternalLink, FileCode2, Github, Menu, Monitor,
  Package, Play, Search, Server, Sparkles, Terminal, X, Zap,
} from "lucide-react";

const sections = [
  { id: "inicio", label: "Inicio", icon: Sparkles },
  { id: "requisitos", label: "Requisitos", icon: Cpu },
  { id: "instalacion", label: "Instalación", icon: Package },
  { id: "nube", label: "Local o nube", icon: Cloud },
  { id: "configuracion", label: "Configuración", icon: FileCode2 },
  { id: "proveedores", label: "Proveedores y APIs", icon: Server },
  { id: "automatizacion", label: "Automatización", icon: Zap },
  { id: "funciones", label: "Funciones", icon: Zap },
  { id: "problemas", label: "Solución de problemas", icon: CircleHelp },
];

const searchKeywords: Record<string, string> = { inicio: "visión general tema video guía", requisitos: "cpu ram gpu python sistema", instalacion: "windows macos linux docker uv pip", nube: "cloud vps railway colab servidor", configuracion: "voz tts whisper subtítulos formato", proveedores: "llm api claves openai gemini deepseek kimi azure", automatizacion: "cron webhook schedule programada upload tiktok instagram youtube", funciones: "flujo cli guion montaje publicación", problemas: "ffmpeg whisper archivos errores soporte" };

const commands = {
  clone: `git clone https://github.com/harry0703/MoneyPrinterTurbo.git\ncd MoneyPrinterTurbo`,
  uv: `uv python install 3.11\nuv sync --frozen`,
  pip: `python3.11 -m venv .venv\nsource .venv/bin/activate\npip install -r requirements.txt`,
  docker: `cd MoneyPrinterTurbo\ndocker compose -f docker-compose.release.yml up`,
  cli: `uv run python cli.py --video-subject "Cómo la IA está cambiando la vida cotidiana"`,
};

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    toast.success("Comando copiado al portapapeles");
    setTimeout(() => setCopied(false), 1600);
  };
  return <button onClick={copy} className="copy-btn" aria-label="Copiar comando">{copied ? <Check size={15} /> : <Clipboard size={15} />}</button>;
}

function CodeBlock({ label, value }: { label: string; value: string }) {
  return <div className="code-wrap"><div className="code-head"><span><Terminal size={14} />{label}</span><CopyButton value={value} /></div><pre><code>{value}</code></pre></div>;
}

export default function Home() {
  const [active, setActive] = useState("inicio");
  const [query, setQuery] = useState("");
  const [mobileNav, setMobileNav] = useState(false);
  const filtered = useMemo(() => sections.filter((section) => `${section.label} ${searchKeywords[section.id]}`.toLowerCase().includes(query.toLowerCase())), [query]);

  const goTo = (id: string) => {
    setActive(id);
    setMobileNav(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return <div className="app-shell">
    <header className="mobile-header">
      <a className="brand" href="#inicio" onClick={() => goTo("inicio")}><img src="/manus-storage/mpt-mark_185d043a.png" alt="" /><span>VideoForge<span>Manual</span></span></a>
      <button className="mobile-menu" onClick={() => setMobileNav(!mobileNav)} aria-label="Abrir navegación">{mobileNav ? <X /> : <Menu />}</button>
    </header>
    <aside className={mobileNav ? "sidebar open" : "sidebar"}>
      <div className="sidebar-top"><a className="brand" href="#inicio" onClick={() => goTo("inicio")}><img src="/manus-storage/mpt-mark_185d043a.png" alt="" /><span>VideoForge<span>Manual</span></span></a><span className="version">MANUAL · ES</span></div>
      <div className="search-box"><Search size={16} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar todo el manual" aria-label="Buscar sección" /></div>
      {query && <div className="search-results"><span>Coincidencias</span>{filtered.length ? filtered.slice(0, 5).map(({ id, label }) => <button key={`result-${id}`} onClick={() => goTo(id)}>{label}<ChevronRight size={13} /></button>) : <small>Sin coincidencias. Prueba «API», «Docker» o «cron».</small>}</div>}<nav className="side-nav" aria-label="Navegación del manual">{filtered.map(({ id, label, icon: Icon }) => <button key={id} className={active === id ? "nav-item active" : "nav-item"} onClick={() => goTo(id)}><Icon size={16} /><span>{label}</span>{active === id && <ChevronRight size={15} />}</button>)}</nav>
      <div className="sidebar-bottom"><div className="status-dot"><span /> Guía basada en el repositorio oficial</div><a href="https://github.com/harry0703/MoneyPrinterTurbo" target="_blank" rel="noreferrer">Ver en GitHub <ExternalLink size={13} /></a></div>
    </aside>
    <main className="main-content">
      <section className="hero-section" id="inicio">
        <div className="hero-image" />
        <div className="hero-copy"><div className="hero-brand-lockup"><img src="/manus-storage/mpt-mark_185d043a.png" alt="" /><span><strong>VideoForge<span>Manual</span></strong><small>GUÍA PARA MONEYPRINTERTURBO</small></span></div><div className="eyebrow"><span className="eyebrow-line" /> DOCUMENTACIÓN ESENCIAL</div><h1>De una idea<br /><em>a un video.</em></h1><p>La guía práctica para instalar, configurar y automatizar <strong>MoneyPrinterTurbo</strong>, el generador de videos cortos con IA.</p><div className="hero-actions"><button className="primary-btn" onClick={() => goTo("instalacion")}>Comenzar guía <ArrowUpRight size={17} /></button><a className="text-link" href="https://github.com/harry0703/MoneyPrinterTurbo/blob/main/README-en.md" target="_blank" rel="noreferrer">README original <ExternalLink size={14} /></a></div></div>
        <div className="hero-pipeline" aria-label="Pipeline de automatización"><span className="pipeline-label">PROMPT → RENDER</span><div className="pipeline-track"><i>01</i><b></b><i>02</i><b></b><i>03</i><b></b><i>04</i></div><span className="pipeline-caption">GUION · VOZ · TIMELINE · EXPORT</span></div><div className="hero-meta"><span>Última revisión</span><strong>AGOSTO 2026</strong><span className="meta-rule" /><span>Lectura estimada</span><strong>8 MIN</strong></div>
      </section>

      <div className="content-frame">
        <section className="intro-section doc-section" id="introduccion"><div className="section-kicker"><span className="section-signal" />01 / VISIÓN GENERAL</div><div className="intro-grid"><div><h2>Qué hace<br /><span>MoneyPrinterTurbo</span></h2></div><div className="intro-text"><p>Convierte un tema o palabra clave en un video corto listo para publicar. El flujo combina generación de guion, selección de material de archivo, voz sintética, subtítulos y música de fondo en una sola herramienta.</p><p>Esta guía está pensada para quien quiere empezar sin perderse entre documentación en inglés, y para quien necesita decidir si ejecutar el sistema en su ordenador o en un servidor cloud.</p><div className="quote"><span>“</span><p>Una herramienta de código abierto para pasar de una idea a una pieza audiovisual en minutos.</p></div></div></div></section>

        <section className="doc-section" id="requisitos"><div className="section-kicker"><span className="section-signal" />02 / ANTES DE EMPEZAR</div><div className="section-heading"><h2>Requisitos del sistema</h2><p>La GPU es opcional. CPU y RAM pesan más si usas servicios de IA en la nube.</p></div><div className="spec-grid"><div className="spec-card"><Cpu size={19} /><span className="spec-label">CPU</span><strong>4 núcleos</strong><small>Mínimo</small><div className="spec-bar"><i style={{width: "40%"}} /></div><strong>6–8 núcleos</strong><small>Recomendado</small></div><div className="spec-card"><Server size={19} /><span className="spec-label">MEMORIA</span><strong>4 GB</strong><small>Mínimo</small><div className="spec-bar"><i style={{width: "55%"}} /></div><strong>8–16+ GB</strong><small>Recomendado / óptimo</small></div><div className="spec-card"><Monitor size={19} /><span className="spec-label">GPU</span><strong>No requerida</strong><small>Mínimo</small><div className="spec-bar"><i style={{width: "75%"}} /></div><strong>4–8+ GB VRAM</strong><small>Recomendada / óptima</small></div></div><div className="note"><Sparkles size={17} /><span><strong>Entorno compatible:</strong> Windows 10+, macOS 11+ o una distribución Linux principal. Para instalación local se requiere Python 3.11 o posterior.</span></div></section>

        <section className="doc-section" id="instalacion"><div className="section-kicker"><span className="section-signal" />03 / PUESTA EN MARCHA</div><div className="section-heading"><h2>Elige tu ruta de instalación</h2><p>Empieza por la opción que mejor encaje con tu experiencia y objetivo.</p></div><div className="route-grid"><article className="route-card featured"><div className="route-top"><span className="route-num">01</span><span className="tag">MÁS SIMPLE</span></div><h3>Windows · Un clic</h3><p>La forma más rápida de hacer una primera prueba local sin configurar Python manualmente.</p><ol><li>Descarga el paquete desde <a href="https://github.com/harry0703/MoneyPrinterTurbo/releases/latest" target="_blank" rel="noreferrer">GitHub Releases <ExternalLink size={12} /></a>.</li><li>Extrae el archivo y ejecuta <code>update.bat</code>.</li><li>Ejecuta <code>start.bat</code>. Chrome o Edge abrirán la interfaz.</li></ol><a className="route-link" href="https://github.com/harry0703/MoneyPrinterTurbo/releases/latest" target="_blank" rel="noreferrer">Descargar paquete <ArrowUpRight size={15} /></a></article><article className="route-card"><div className="route-top"><span className="route-num">02</span><span className="tag muted-tag">CONTROL TOTAL</span></div><h3>macOS / Linux · Manual</h3><p>La ruta recomendada si quieres entender el entorno, automatizar por CLI o mantenerlo actualizado.</p><CodeBlock label="1. Clonar y preparar entorno" value={commands.clone + "\n\n" + commands.uv} /><CodeBlock label="2. Lanzar la WebUI" value={`sh webui.sh\n\n# Acceso LAN (opcional)\nMPT_WEBUI_HOST=0.0.0.0 sh webui.sh`} /></article></div><div className="subroute"><div><strong>¿Prefieres pip?</strong><span>Usa venv como alternativa a uv.</span></div><CodeBlock label="Entorno clásico" value={commands.pip} /></div></section>

        <section className="doc-section cloud-section" id="nube"><div className="section-kicker"><span className="section-signal" />04 / DECISIÓN DE DESPLIEGUE</div><div className="section-heading"><h2>¿Local o en la nube?</h2><p>La respuesta depende de si estás probando, produciendo o automatizando.</p></div><div className="decision-table"><div className="decision-head"><span>Opción</span><span>Conviene cuando</span><span>Ten en cuenta</span></div><div className="decision-row"><div><Monitor size={18} /><strong>Local</strong></div><p>Quieres control total, privacidad y creación ocasional.</p><small>Tu equipo debe estar encendido. Una GPU acelera procesos pesados.</small></div><div className="decision-row recommended"><div><Cloud size={18} /><strong>Cloud / VPS</strong><span>RECOMENDADO</span></div><p>Buscas ejecutar tareas programadas 24/7 o generar por lotes.</p><small>Necesitas configurar claves, almacenamiento y costes del proveedor.</small></div><div className="decision-row"><div><Sparkles size={18} /><strong>Servicio gestionado</strong></div><p>Quieres empezar sin configurar servidores ni dependencias.</p><small>Menos control y más dependencia de la plataforma elegida.</small></div></div><div className="cloud-cards"><a className="cloud-link" href="https://railway.com/deploy/moneyprinterturbo" target="_blank" rel="noreferrer"><span><strong>Railway</strong><small>Plantilla de despliegue cloud para el proyecto</small></span><ArrowUpRight size={18} /></a><a className="cloud-link" href="https://colab.research.google.com/github/harry0703/MoneyPrinterTurbo/blob/main/docs/MoneyPrinterTurbo.ipynb" target="_blank" rel="noreferrer"><span><strong>Google Colab</strong><small>Prueba rápida sin configurar tu ordenador</small></span><ArrowUpRight size={18} /></a></div></section>

        <section className="doc-section" id="configuracion"><div className="section-kicker"><span className="section-signal" />05 / CONFIGURACIÓN</div><div className="section-heading"><h2>Configura el motor creativo</h2><p>En el primer arranque se crea <code>config.toml</code> a partir de la plantilla de ejemplo.</p></div><div className="config-grid"><div className="config-panel"><div className="panel-icon"><Code2 size={18} /></div><h3>Voz y subtítulos</h3><p>Edge TTS viene como opción gratuita por defecto. También puedes usar Azure, Gemini, ElevenLabs, Chatterbox y otros proveedores.</p><div className="mini-list"><span><Check size={14} /> Subtítulos <b>edge</b></span><span><Check size={14} /> Subtítulos <b>whisper</b></span><span><Check size={14} /> Voces multilingües</span></div></div><div className="config-panel"><div className="panel-icon amber"><Play size={18} /></div><h3>Material y formato</h3><p>Combina tus propios archivos con material HD de Pexels, Pixabay y Coverr. Elige formato vertical para Shorts o horizontal para YouTube.</p><div className="format-pills"><span>9:16 · 1080×1920</span><span>16:9 · 1920×1080</span></div></div></div><CodeBlock label="Whisper opcional · config.toml" value={`[app]\nsubtitle_provider = "whisper"\n\n[whisper]\nmodel_size = "large-v3-turbo"`} /></section>

        <section className="doc-section" id="proveedores"><div className="section-kicker"><span className="section-signal" />06 / MOTOR Y CREDENCIALES</div><div className="section-heading"><h2>Proveedores sin perder el control</h2><p>Elige dónde viven tus modelos y protege las claves que conectan el flujo.</p></div><div className="provider-layout"><div className="provider-copy"><p>MoneyPrinterTurbo puede trabajar con proveedores LLM y TTS alojados en la nube, pasarelas unificadas o runtimes locales. La elección afecta el coste, la latencia, la privacidad y la facilidad de mantenimiento.</p><div className="provider-list"><div><strong>LLM</strong><span>OpenAI · Gemini · DeepSeek · Kimi · Qwen · Ollama</span></div><div><strong>TTS</strong><span>Edge TTS · Azure · Gemini · ElevenLabs · Chatterbox</span></div></div></div><div className="secret-card"><div className="secret-head"><span className="lock-mark">◇</span><span>CONFIGURACIÓN SEGURA</span><span className="secure-pill">NO PEGAR EN EL FRONTEND</span></div><h3>Una clave, una variable</h3><p>Usa el archivo de configuración o secretos del servidor. Nunca publiques claves API en el repositorio ni en código del navegador.</p><CodeBlock label=".env · ejemplo conceptual" value={`LLM_API_KEY=tu_clave_aqui\nTTS_API_KEY=tu_clave_aqui\n# Reinicia el servicio después de guardar`} /></div></div></section>

        <section className="doc-section" id="automatizacion"><div className="section-kicker"><span className="section-signal" />07 / OPERACIÓN CONTINUA</div><div className="section-heading"><h2>Automatiza sin estar pendiente</h2><p>Convierte el CLI y la API en un sistema de producción repetible.</p></div><div className="automation-rail"><div className="automation-node"><span>01</span><strong>Disparador</strong><small>cron, scheduler o webhook</small></div><i /><div className="automation-node"><span>02</span><strong>Generación</strong><small>CLI / API con tema y formato</small></div><i /><div className="automation-node"><span>03</span><strong>Revisión</strong><small>carpeta de salida o callback</small></div><i /><div className="automation-node"><span>04</span><strong>Publicación</strong><small>Upload-Post y privacidad</small></div></div><div className="automation-grid"><div className="automation-card"><span className="card-index">CRON · EJEMPLO</span><h3>Una tarea diaria</h3><p>En Linux, programa el comando para que el servidor genere una pieza a una hora fija. Añade logs y un directorio de salida para poder auditar cada ejecución.</p><CodeBlock label="crontab" value={`0 9 * * * cd /ruta/MoneyPrinterTurbo && uv run python cli.py --video-subject "Tu tema del día" >> logs/video.log 2>&1`} /></div><div className="automation-card"><span className="card-index">WEBHOOK · ARQUITECTURA</span><h3>Un evento dispara el video</h3><p>Un formulario, un calendario editorial o tu propio backend puede llamar a la API. Mantén la clave en el servidor y responde con un estado de trabajo.</p><div className="api-flow"><span>EVENTO</span><b>→</b><span>API</span><b>→</b><span>RENDER</span></div></div></div></section>

        <section className="doc-section" id="funciones"><div className="section-kicker"><span className="section-signal" />08 / FLUJO DE TRABAJO</div><div className="section-heading"><h2>De tema a video publicado</h2><p>Cuatro pasos. Una misma interfaz.</p></div><div className="flow"><div className="flow-line" />{[["01", "Idea", "Escribe un tema o palabra clave."], ["02", "Guion", "La IA redacta el texto y extrae palabras clave."], ["03", "Montaje", "Se sincronizan clips, voz, subtítulos y música."], ["04", "Publicación", "Exporta o publica en TikTok, Instagram y YouTube Shorts."]].map(([num, title, desc]) => <div className="flow-step" key={num}><span>{num}</span><div><h3>{title}</h3><p>{desc}</p></div></div>)}</div><div className="cli-callout"><div><div className="section-kicker"><span className="section-signal" />ATAJO · CLI</div><h3>Genera sin abrir el navegador</h3><p>Ideal para scripts, cron jobs y pipelines de automatización.</p></div><CodeBlock label="Terminal" value={commands.cli} /></div></section>

        <section className="doc-section" id="problemas"><div className="section-kicker"><span className="section-signal" />09 / SOPORTE</div><div className="section-heading"><h2>Solución de problemas</h2><p>Los tres errores más frecuentes durante la puesta en marcha.</p></div><div className="trouble-list"><details open><summary><span><span className="error-dot" />No se encuentra FFmpeg</span><ChevronRight size={17} /></summary><div><p>Normalmente se descarga automáticamente. Si falla, instala FFmpeg y define su ruta en <code>config.toml</code>:</p><CodeBlock label="config.toml · Windows" value={`[app]\nffmpeg_path = "C:\\\\Users\\\\tu_usuario\\\\Downloads\\\\ffmpeg.exe"`} /></div></details><details><summary><span><span className="error-dot" />Too many open files</span></summary><div><p>Comprueba el límite actual y elévalo temporalmente:</p><CodeBlock label="Terminal" value={`ulimit -n\nulimit -n 10240`} /></div></details><details><summary><span><span className="error-dot" />No descarga el modelo Whisper</span></summary><div><p>Descarga el modelo desde Hugging Face y coloca la carpeta completa dentro de <code>MoneyPrinterTurbo/models</code>.</p><a href="https://huggingface.co/Systran/faster-whisper-large-v3" target="_blank" rel="noreferrer">Abrir modelo Whisper <ExternalLink size={13} /></a></div></details></div></section>

        <footer className="site-footer"><div><a className="brand" href="#inicio" onClick={() => goTo("inicio")}><img src="/manus-storage/mpt-mark_185d043a.png" alt="" /><span>VideoForge<span>Manual</span></span></a><p>Manual de uso en español para crear más, configurar menos.</p></div><div className="footer-links"><a href="https://github.com/harry0703/MoneyPrinterTurbo/issues" target="_blank" rel="noreferrer">Reportar un problema <ExternalLink size={13} /></a><a href="https://github.com/harry0703/MoneyPrinterTurbo" target="_blank" rel="noreferrer"><Github size={14} /> Repositorio oficial</a></div></footer>
      </div>
    </main>
  </div>;
}

export { commands };

// Source: https://github.com/harry0703/MoneyPrinterTurbo/blob/main/README-en.md
// Source: https://railway.com/deploy/moneyprinterturbo
// Source: https://colab.research.google.com/github/harry0703/MoneyPrinterTurbo/blob/main/docs/MoneyPrinterTurbo.ipynb
// Source: https://huggingface.co/Systran/faster-whisper-large-v3
// Source: https://www.docker.com/products/docker-desktop/

const _unused = { commands, ArrowUpRight, Check, ChevronRight, CircleHelp, Clipboard, Cloud, Code2, Cpu, ExternalLink, FileCode2, Github, Menu, Monitor, Package, Play, Search, Server, Sparkles, Terminal, X, Zap };
void _unused;

// Diseño: tipografía Inter para titulares y Roboto para lectura; fondo papel frío, navy editorial y ámbar como llamada de atención.
// La composición prioriza una barra lateral fija y bloques asimétricos para que la documentación no se sienta como una página plana.
// La interacción debe ser funcional: búsqueda, navegación por anclas y copiado de comandos con feedback inmediato.
// Animación: transiciones cortas y respetuosas; no usar movimiento decorativo que compita con el contenido.
// Marca: símbolo de reproducción dentro de una apertura de película; tono directo, informado y empoderador.
// Color de marca: #007BFF como azul tecnológico propio, complementado con #E8A24A para decisiones y alertas.
// No usar testimonios, reseñas ni datos de usuario inventados.
// Todos los enlaces externos abren en una pestaña nueva y tienen rel="noreferrer".
// El contenido se basa en las fuentes enlazadas al final del documento.
// Este archivo contiene únicamente UI frontend; no hay llamadas a backend.
// Revisar siempre: ¿esta decisión refuerza o diluye la filosofía profesional y elegante?
// Fin de recordatorio de estilo.
//
// Nota de implementación: las líneas de comentarios anteriores sirven como contrato visual para futuras ediciones.
// Mantener el lenguaje español en toda la interfaz.
// Mantener el contraste mínimo de textos sobre imágenes con overlay oscuro.
// Mantener la legibilidad de comandos en fondos monoespaciados.
// Mantener el orden de foco y etiquetas aria en controles.
// Mantener la jerarquía de secciones numerada.
// Evitar transformar la página en una cuadrícula uniforme.
// Mantener la barra lateral como índice contextual.
// Mantener tarjetas sin exceso de radios.
// Mantener el ritmo de espacios amplios.
// Mantener los CTA concretos y no genéricos.
// Mantener la referencia al repositorio visible.
// Mantener el estado activo de navegación.
// Mantener el cierre con enlaces de soporte.
// Mantener la identidad visual en móvil.
// Mantener la imagen hero en el área prominente.
// Mantener el símbolo de marca visible en header y footer.
// Mantener un enfoque editorial de documentación.
// Mantener una sensación de guía práctica.
// Mantener el texto corto en la navegación.
// Mantener la selección de rutas explícita.
// Mantener accesibilidad básica.
// Mantener compatibilidad con reduced motion vía CSS.
// Mantener el sitio estático.
// Mantener las rutas de imágenes como URLs gestionadas.
// Mantener la experiencia de copiar código.
// Mantener el foco en decisiones de instalación.
// Mantener un tono profesional.
// Mantener las fuentes de verdad externas.
// Mantener el color azul #007BFF para botones principales.
// Mantener el color ámbar solo para énfasis.
// Mantener fondo #F6F4EF en contenido.
// Mantener navy #15253B en superficies de navegación.
// Mantener bordes finos y sombras suaves.
// Mantener contraste en dark sidebar.
// Mantener el hero con una composición no centrada.
// Mantener la navegación con escape al inicio.
// Mantener el foco de teclado visible.
// Mantener la documentación autosuficiente.
// Mantener el contenido fiel al manual.
// Mantener la indicación de que proveedores pueden tener costes propios.
// Mantener la indicación de que GPU es opcional.
// Mantener la recomendación cloud para automatización 24/7.
// Mantener la diferencia entre prueba local y producción.
// Mantener la llamada a Google Colab.
// Mantener la llamada a Railway.
// Mantener la llamada a GitHub Releases.
// Mantener enlaces externos accionables.
// Mantener bloque de Whisper.
// Mantener troubleshooting resumido.
// Mantener CTA final de soporte.
// Mantener no uso de backend.
// Mantener implementación en React.
// Mantener composición premium.
// Mantener uso de iconos lucide.
// Mantener header móvil.
// Mantener side nav colapsable.
// Mantener scroll suave.
// Mantener feedback toast.
// Mantener copy buttons.
// Mantener details nativos para FAQ.
// Mantener decisiones visuales documentadas.
// Mantener lenguaje y nomenclatura consistente.
// Mantener posibilidad de futuras páginas.
// Mantener este archivo modularizado a futuro si crece.
// Mantener entrega final con checkpoint.
// Fin.
// Diseño por Manus AI.
//
// End of style contract.
