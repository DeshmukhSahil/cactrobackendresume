# Sahil Deshmukh — Terminal Resume

Cactro Backend Test

Display my full-stack developer resume directly in your terminal with one command.

## Quick run

Run:

```bash
npx deshmukhsahil
```

## What this is

A small CLI that prints my full-stack developer resume directly in the terminal.

Created as part of the Cactro Backend Hiring Test (Dec 14, 2025, Test ID: 946).

It allows anyone to instantly view my professional experience, skills, and projects using a single command in the terminal.

Sections included:

* Contact information (phone, email, LinkedIn, GitHub, portfolio)
* Professional summary
* Work experience (with project links)
* Education
* Skills / Tech stack
* Certifications
* Project links (clickable in many terminals)

## Tech

* Node.js (ES Modules)
* [chalk](https://www.npmjs.com/package/chalk) — colors & text styling
* [boxen](https://www.npmjs.com/package/boxen) — boxed output
* [wrap-ansi](https://www.npmjs.com/package/wrap-ansi) — safe wrapping for narrow terminals

## Project structure

```text
deshmukhsahil/
├── bin/
│   └── index.js
├── package.json
├── README.md
└── .gitignore
```



## Development / Local testing

Clone and run locally:

```bash
git clone https://github.com/DeshmukhSahil/cactrobackendresume
cd cactrobackendresume
npm install
node bin/index.js
```

To test the command as if it were installed globally:

```bash
npm link
deshmukhsahil
npm unlink -g
```

## Notes

* The CLI is already published as `deshmukhsahil` and can be run via:

```bash
npx deshmukhsahil
```

* `bin/index.js` contains the executable code and starts with the shebang:

```bash
#!/usr/bin/env node
```

* If you want to test or run it locally, you can use:

```bash
npm link
deshmukhsahil
npm unlink -g
```

* use `npx deshmukhsahil`.


## Contributing

This is primarily a personal resume package. If you want to suggest improvements (formatting tweaks, additional sections), open an issue or submit a pull request.


## License

MIT © Sahil Deshmukh


## Contact

* Email: `sahildeshmukh2898@gmail.com`
* GitHub: `https://github.com/DeshmukhSahil`
* LinkedIn: `https://linkedin.com/in/deshmukhsahil`