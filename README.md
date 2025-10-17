# Plataforma ONG — Entrega I (Fundamentos e Estruturação)

Este repositório contém a **Entrega I** do projeto da plataforma para ONGs, focada em **HTML5 semântico**, **formulários** e **multimídia**.

## Estrutura
```
/assets/img       # imagens otimizadas (WEBP/JPG ou SVG de placeholder)
/css/styles.css   # estilos mobile-first, acessíveis e responsivos
/js/main.js       # máscaras (CPF, telefone, CEP) e pequenos helpers
index.html        # página inicial (institucional + transparência + contato)
projetos.html     # listagem de projetos com galeria e métricas
cadastro.html     # formulário completo com validação nativa + máscaras
```
## Como validar (W3C)
- Acesse: https://validator.w3.org/
- Use **Validate by File Upload** para cada HTML

## Boas práticas atendidas
- **Semântica**: header/nav/main/section/article/figure/figcaption/footer, hierarquia de títulos coerente
- **Acessibilidade (WCAG 2.1 AA)**: skip-link, rótulos, contraste, foco visível, textos alternativos
- **Responsividade**: mobile-first com breakpoints em 640px e 960px
- **Desempenho**: imagens otimizadas (WEBP/JPG ou SVG); `loading="lazy"`; CSS “minified-ish”
- **Formulário**: tipos HTML5, `required`, `pattern`, `title`, `autocomplete`, **máscaras** via JS
- **SEO**: meta description/título por página, estrutura semântica

## Publicação no GitHub
1. Crie um repositório **público** e faça upload de todos os arquivos.
2. (Opcional) Ative o **GitHub Pages** (Settings → Pages → Deploy from branch → `main` / root).
3. Envie o **link público** no AVA conforme orientações.

> Observação: As imagens são placeholders. Substitua pelos assets reais da ONG (otimize para WEBP e informe dimensões).

---
© ONG Esperança — Entrega I
