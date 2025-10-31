# Plataforma ONG — Entrega I (Fundamentos e Estruturação)

Este repositório contém 3 páginas HTML5 semânticas com acessibilidade, responsividade e formulários com máscaras e validação nativa.

## Estrutura
```
/
├─ index.html
├─ projetos.html
├─ cadastro.html
├─ assets/
│  ├─ css/style.css
│  ├─ js/main.js
│  ├─ js/masks.js
│  └─ img/{logo.svg, hero.webp/png, projeto*.webp/png}
├─ robots.txt
└─ sitemap.xml
```

## Requisitos atendidos
- **Semântica HTML5**: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `picture`, `source`.
- **Páginas obrigatórias**: `index.html`, `projetos.html`, `cadastro.html`.
- **Imagens em múltiplos formatos**: PNG e WebP, `loading="lazy"` e `picture` para fontes modernas.
- **Responsividade**: mobile-first, `meta viewport`, grid responsivo e breakpoints.
- **Acessibilidade (WCAG 2.1 AA)**: hierarquia de títulos, skip link, labels associadas, `aria-*`, alto contraste, foco visível.
- **Desempenho**: CSS minificado o suficiente, imagens otimizadas e WebP, scripts com `defer`.
- **Formulário complexo**: campos (nome, e-mail, CPF, telefone, data de nascimento, endereço, CEP, cidade, estado), agrupados por `fieldset/legend`.
- **Validação nativa**: `required`, `pattern`, `minlength`, `type="email/date/number"`. Mensagens exibidas via API de validação.
- **Máscaras**: CPF, CEP e Telefone em `assets/js/masks.js`.
- **SEO**: meta description, `sitemap.xml`, `robots.txt`, estrutura semântica.

## Como validar no W3C
Abra https://validator.w3.org/nu/ e valide cada arquivo (URL do GitHub Pages ou upload do arquivo). Corrija avisos caso o professor exija 0 warnings.
