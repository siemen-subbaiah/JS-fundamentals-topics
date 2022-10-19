**These are boolean attributes which are being used in the script tag. It is used to load the external scripts in the webpage efficiently.**

- Before diving deep, we should know that 'a script will be fetched or downloaded first and then executed'

## Normal Scenario

- Here the HTML parsing is done at first, once the script tag is encountered it fetches and executes the script

- HTML parsing is paused and once the script tag is fetched and executed the HTML parsing is being resumed

- In this scenario the JavaScript blocks the rendering of HTML

## Async Scenario

- Here the HTML parsing is done at first, once the script tag is encountered it fetches parallelly while the parsing is being done and executes the script.

- HTML parsing is paused in only the executing phase and once the script tag is executed the HTML parsing is being resumed

- While the script is fetching, JavaScript does not block the rendering of HTML, but it does block when the script is executing.

## Defer Scenario

- Here the HTML parsing is done at first, once the script tag is encountered it fetches parallelly and are executed only when the HTML parsing has been completed

- JavaScript does not block HTML in this case.

---

![ex-img](https://media-exp1.licdn.com/dms/image/C5112AQFW3cKEhP9AkQ/article-cover_image-shrink_423_752/0/1520214761012?e=1671667200&v=beta&t=ZLSWoZtCvop3S2Lh8bCeJd1KVJQ7kkYprUFkIBeBiEw)
