# Verificación visual

## Escritorio

La página se renderiza en una columna editorial amplia junto a una barra lateral fija oscura. El hero muestra el lockup de MoneyPrinterTurbo, el pipeline «PROMPT → RENDER», el CTA principal y el enlace al README. Las secciones mantienen una jerarquía clara con numeración, tarjetas de especificaciones, rutas de instalación, tabla de decisión cloud, tarjetas de configuración, flujo por etapas, CLI y FAQ.

## Móvil

La página se adapta a una columna de lectura y mantiene los contrastes entre superficies claras y navy. La cabecera móvil permanece visible con el control de menú; el sidebar se transforma en panel colapsable. Las tarjetas se apilan, la tabla de decisión cambia a filas de una columna y los bloques de código conservan su legibilidad con desplazamiento horizontal cuando es necesario.

## Validación técnica

`pnpm run check` finaliza sin errores de TypeScript. `pnpm run build` finaliza correctamente. Vite mantiene las rutas `/manus-storage/...` para resolverlas en runtime; el aviso de tamaño de chunk es informativo y no bloquea la compilación. El hero y el símbolo de marca usan URLs gestionadas de Manus Storage. No se añadieron servicios backend ni contenido de reseñas o testimonios.

## Decisiones aplicadas desde la revisión

Se añadió una identidad más propia mediante el lockup del hero y el símbolo recurrente. Se añadió un pipeline visual prompt-a-render con nodos numerados. Se cambió la combinación tipográfica a Space Grotesk, DM Sans y JetBrains Mono. Se oscureció la tarjeta de voz y subtítulos para evitar que el centro de la página fuese demasiado neutro. Se documentaron las decisiones en `ideas.md`.
