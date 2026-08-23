/** Design: VideoForge Manual mantiene el manual técnico cinematográfico premium también en la referencia API. */
import { ArrowLeft, ArrowUpRight, Check, Clipboard, Code2, ExternalLink, Terminal } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "wouter";
import ThemeToggle from "@/components/ThemeToggle";

function ApiCode({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => { await navigator.clipboard.writeText(value); setCopied(true); toast.success("Ejemplo copiado"); setTimeout(() => setCopied(false), 1400); };
  return <div className="api-code"><div><span><Terminal size={14} />{label}</span><button onClick={copy} aria-label="Copiar ejemplo">{copied ? <Check size={14} /> : <Clipboard size={14} />}</button></div><pre>{value}</pre></div>;
}

export default function ApiReference() {
  return <div className="api-page">
    <header className="api-header"><Link href="/" className="api-back"><ArrowLeft size={16} /> Volver al manual</Link><div className="api-header-right"><span className="api-label">REFERENCE / API</span><ThemeToggle /></div></header>
    <main className="api-main"><div className="api-intro"><span className="section-kicker"><span className="section-signal" />REFERENCIA TÉCNICA</span><h1>API para orquestar<br /><em>tu pipeline de video.</em></h1><p>Una guía práctica para conectar MoneyPrinterTurbo con formularios, calendarios editoriales, cron jobs y otros sistemas. El servicio API se expone en el puerto <code>8080</code> cuando ejecutas el proyecto localmente.</p><div className="api-intro-actions"><a href="http://127.0.0.1:8080/docs" target="_blank" rel="noreferrer">Abrir Swagger local <ArrowUpRight size={15} /></a><a href="http://127.0.0.1:8080/redoc" target="_blank" rel="noreferrer">Abrir ReDoc <ExternalLink size={14} /></a></div></div>
      <div className="api-layout"><aside className="api-toc"><span>EN ESTA PÁGINA</span><a href="#inicio-api">Conceptos básicos</a><a href="#flujo-api">Flujo de una solicitud</a><a href="#crear-video">Crear un video</a><a href="#estado-api">Consultar estado</a><a href="#seguridad-api">Seguridad</a></aside><div className="api-content">
        <section id="inicio-api" className="api-section"><div className="api-number">01</div><div><h2>Conceptos básicos</h2><p>La API permite separar la interfaz de usuario del proceso de generación. Tu sistema envía un tema, opciones de formato y credenciales desde el servidor; MoneyPrinterTurbo procesa el trabajo y devuelve un identificador para seguirlo.</p><div className="endpoint"><span className="method post">POST</span><code>/api/v1/videos</code><small>Crear una tarea de generación</small></div><div className="endpoint"><span className="method get">GET</span><code>/api/v1/videos/{`{job_id}`}</code><small>Consultar estado y resultado</small></div></div></section>
        <section id="flujo-api" className="api-section"><div className="api-number">02</div><div><h2>Flujo de una solicitud</h2><p>Diseña la integración como una pequeña máquina de estados: solicitar, esperar, revisar y descargar. Para producción, guarda el <code>job_id</code>, añade reintentos limitados y registra errores.</p><div className="api-flow-large"><span>REQUEST</span><b>→</b><span>QUEUED</span><b>→</b><span>RENDERING</span><b>→</b><span>READY</span></div></div></section>
        <section id="crear-video" className="api-section"><div className="api-number">03</div><div><h2>Crear un video</h2><p>Ejemplo conceptual con <code>curl</code>. Ajusta el endpoint exacto según la versión del repositorio y verifica la documentación Swagger que expone tu instancia.</p><ApiCode label="Solicitud · curl" value={`curl -X POST http://127.0.0.1:8080/api/v1/videos \\\n  -H "Content-Type: application/json" \\\n  -H "Authorization: Bearer $MPT_API_KEY" \\\n  -d '{\n    "video_subject": "Hábitos para concentrarse",\n    "video_aspect": "9:16",\n    "subtitle_provider": "edge"\n  }'`} /><ApiCode label="Solicitud · JavaScript en servidor" value={`const response = await fetch(process.env.MPT_API_URL + "/api/v1/videos", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json",\n    "Authorization": \`Bearer \${process.env.MPT_API_KEY}\`\n  },\n  body: JSON.stringify({\n    video_subject: "Hábitos para concentrarse",\n    video_aspect: "9:16"\n  })\n});\nconst job = await response.json();`} /></div></section>
        <section id="estado-api" className="api-section"><div className="api-number">04</div><div><h2>Consultar estado</h2><p>Consulta periódicamente el trabajo o usa un callback si tu integración lo admite. No descargues el resultado hasta que el estado sea <code>ready</code>.</p><ApiCode label="Consultar · curl" value={`curl http://127.0.0.1:8080/api/v1/videos/$JOB_ID \\\n  -H "Authorization: Bearer $MPT_API_KEY"`} /><div className="status-grid"><span><b>queued</b><small>En cola</small></span><span><b>rendering</b><small>Procesando</small></span><span><b>ready</b><small>Listo para descargar</small></span><span><b>failed</b><small>Revisar logs</small></span></div></div></section>
        <section id="seguridad-api" className="api-section"><div className="api-number">05</div><div><h2>Seguridad y operación</h2><p>La API debe permanecer detrás de una capa de autenticación y, si se expone fuera de tu red, detrás de HTTPS y un proxy. Mantén claves y tokens en variables de entorno del servidor.</p><div className="security-grid"><div><Code2 size={18} /><strong>Variables de entorno</strong><small>El navegador nunca debe recibir MPT_API_KEY.</small></div><div><Check size={18} /><strong>Reintentos controlados</strong><small>Registra cada job y evita duplicados accidentales.</small></div></div><ApiCode label="configuración local" value={`# WebUI + API local\nuv run python main.py\n\n# Documentación interactiva\nhttp://127.0.0.1:8080/docs`} /></div></section>
      </div></div>
    </main><footer className="api-footer"><span>VideoForge Manual · Referencia para MoneyPrinterTurbo</span><a href="https://github.com/harry0703/MoneyPrinterTurbo" target="_blank" rel="noreferrer">Repositorio oficial <ExternalLink size={13} /></a></footer>
  </div>;
}

// Esta referencia distingue ejemplos conceptuales de la documentación exacta disponible en la instancia.
// Mantener todas las credenciales en el servidor y nunca en el frontend.
// Mantener el enlace a Swagger/ReDoc para validar rutas según la versión instalada.
// Mantener la tipografía grande y el contraste alto para lectura técnica prolongada.
// Mantener la identidad VideoForge Manual; MoneyPrinterTurbo es el software documentado.
// No se añaden testimonios, reviews ni datos simulados de usuarios.
// Diseño por Manus AI.
