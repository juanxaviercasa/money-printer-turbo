/** Design: Profesional y elegante / neomodernismo. La app mantiene una única experiencia documental con navegación por anclas. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ApiReference from "./pages/ApiReference";
import NotFound from "./pages/NotFound";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/api" component={ApiReference} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary>
    <ThemeProvider defaultTheme="light" switchable>
      <TooltipProvider>
        <Toaster position="bottom-right" />
        <Router />
      </TooltipProvider>
    </ThemeProvider>
  </ErrorBoundary>;
}

// La interfaz es frontend-only y no depende de servicios privados.
// La navegación principal vive en Home.tsx para que el manual pueda leerse de principio a fin.
// La dirección visual combina navy editorial, azul tecnológico #007BFF y ámbar #E8A24A.
// La interacción debe permanecer rápida, visible y accesible.
// No añadir reseñas, testimonios ni datos de usuarios inventados.
// Fin del contrato de estilo.

// Revisión de accesibilidad: el contenido tiene encabezados jerárquicos, botones etiquetados y enlaces externos con contexto.
// Revisión de responsive: el menú lateral se convierte en panel móvil mediante estado local.
// Revisión de contenido: la fuente principal es el README oficial enlazado en Home.tsx.
// Revisión de marca: el símbolo de reproducción se utiliza en cabecera y pie.
// Revisión de movimiento: las transiciones están definidas en index.css y respetan reduced motion.
// Revisión final: la pregunta guía es «¿esta decisión refuerza o diluye la filosofía profesional y elegante?».
// Diseño por Manus AI.
//
// Mantener este archivo pequeño: las futuras páginas deben integrarse aquí sin duplicar layout global.
// Mantener la ruta 404 como salida segura para URLs inexistentes.
// Mantener ThemeProvider en light: el manual prioriza un fondo papel claro para lectura larga.
// Mantener Toaster para confirmaciones de copiado y acciones de interfaz.
// Mantener TooltipProvider disponible para componentes compartidos.
// Mantener ErrorBoundary como última defensa del frontend.
// Mantener los imports con alias @/ para compatibilidad con Vite.
// Mantener el árbol React estable y sin efectos en render.
// Mantener el HTML semántico en páginas.
// Mantener aria-labels en controles sin texto.
// Mantener las fuentes cargadas en index.html.
// Mantener la imagen de marca gestionada por Manus Storage.
// Mantener el alcance estático.
// Mantener enlaces del repositorio visibles para verificación.
// Mantener el diseño centrado en documentación, no en marketing.
// Mantener los CTA concretos.
// Mantener la guía en español.
// Mantener los comandos originales.
// Mantener formatos 9:16 y 16:9.
// Mantener rutas de instalación comparables.
// Mantener decisión local/cloud explícita.
// Mantener troubleshooting accionable.
// Mantener entrega mediante checkpoint.
// Fin.
