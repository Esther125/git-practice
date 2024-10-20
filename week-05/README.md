# Cloud native system development and maintenance HW5

1. 我的網址：[https://liyichen125.online/](https://liyichen125.online/)
2. 你在哪裡購買網域的?

    Godaddy

3. DNS 的 A record 是什麼？

    A record 全名是 Address Record，它可以讓 DNS 把網域名稱對應到相對應的 IP 位置上。

4. DNS 的 NS record 是什麼？

    NS record 全名是 Name Server Record，它記載了負責我網域名稱的伺服器位置。有這個紀錄別人要造訪我的網頁時才知道要去哪個伺服器向他查詢我的 IP 位置。

5. Domain Name vs FQDN vs URL 這三者分別為何？

    - **Domain Name (域名)：** 用來替代 IP 位置，讓人們可以更容易記住和訪問，下面可能還有多個子網域。
    - **完全限定域名 (FQDN)：** 域名的完整表達形式，可以唯一識別一台主機的位置。
    - **統一資源定位符 (URL)：** 在網路上可以訪問某個資源的完整的網址，包括協議（HTTP/HTTPS），服務器地址，以及特定路徑或參數。

6. 為什麼應該要為網站加上憑證？而不是直接用 http 就好？

    比較安全，https 資料傳輸會加密，http 的不會。
