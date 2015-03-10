* {
  margin: 0;
  padding: 0;
}

html {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
}

body {
  margin: 0 auto;
  color: #333;
}

table {
  border-collapse: collapse;
  border: 1px solid #000;
  font-size: .8em;
}

thead th {
  padding: 10px;
  color: #f3f3f3;
  background-color: #000;
}

tbody th {
  padding: 20px;
  border: 1px solid #000;
}

.info {
  margin: 10px 0;
}

.evento {
  position: relative;
  padding: 15px 15px 15px 25px;
  text-align: center;
  color: #333;
  background-color: #f3f3f3;
  border: 1px solid #000;
  width: 20%;
}

.evento .tipo {
  position: absolute;
  left: 0;
  padding: 3px 0;
  color: #f3f3f3;
  font-size: 1.2em;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  transform: rotate(-90deg);
  transform-origin: 0 0;
}

.evento.basics .tipo {
  background-color: #11a7a6;
}
.evento.coach .tipo {
  background-color: #71ad1c;
}
.evento.tools .tipo {
  background-color: #c2b93f;
}
.evento.pm .tipo {
  background-color: #df3094;
}
.evento.trends .tipo {
  background-color: #c80000;
}
.evento.gov .tipo {
  background-color: #a730df;
}

.evento .palestra {
  margin-bottom: 6px;
  font-size: 1em;
  font-weight: bold;
}

/* aba jquery */

#dia1, #dia2, #dia3 {
  border: 2px solid #000;
  padding: 30px 40px;
}

.ui-tabs-nav li {
  display: inline-block;
  padding: 10px 15px;
  border: 3px solid #000;
  border-bottom: none;
  background-color: #000;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  font-weight: bold;
}

.ui-tabs-nav li.ui-state-active {
  background-color: #fff;
  position: relative;
  bottom: -2;
}

.ui-tabs-nav li a {
  text-decoration: none;
  color: #f3f3f3;
}

.ui-tabs-nav li.ui-state-active a {
  color: #000;
}

