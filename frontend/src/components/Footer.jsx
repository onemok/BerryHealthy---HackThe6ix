import React from "react";

function Footer() {
  return (
    <footer class="footer items-center p-4 bg-neutral text-neutral-content">
      <div class="items-center grid-flow-col">
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a>Twitter</a>
        <a>Facebook</a>
        <a>Devpost</a>
      </div>
    </footer>
  );
}

export default Footer;
