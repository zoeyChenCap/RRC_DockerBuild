# Chen Zoey — Assignment 14: Portfolio Site

This portfolio site showcases my course work (Assignment 11/12/13) and was built with React.

---

## **Run locally (production build)**
1. Install dependencies:
```bash
npm ci
```

2. Build:
```bash
npm run build
```

3. Preview locally:
```bash
npx serve -s build -l 5575
# open http://localhost:5575
```
---

## **Docker(production)**
Build image:
```bash
docker build -t chen_zoey_coding_assignment14 .
```
Run container:
```bash
docker run -d -p 5575:80 --name Chen_Zoey_coding_assignment14 chen_zoey_coding_assignment14
# open http://localhost:5575
```
