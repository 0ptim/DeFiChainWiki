---
title: Nakit Akışı Seçenekleri
description: TODO - Short description of this page.
---

DeFiChain ekosistemine katkı değer sağlayarak nakit akışı elde etmenin birçok harika yolu var. Varlıklarınıza ve risk iştahınıza bağlı olarak, size en uygun yolu seçebilirsiniz. Bu yazıda, seçim yapmanızı kolaylaştırmak için tüm yolları özetlemeye çalışacağım. Belki daha önce gözden kaçırdığınız bazı seçenekler de bulabilirsiniz. Gelecek güncelleme ile bazı seçeneklerdeki ödüller de değişecek, bu yüzden okuyun ve en iyi seçeneğinizi bulun.

:::info Yasal Uyarı
Her zaman olduğu gibi, burada yazılanlar yatırım tavsiye değildir, ödüller yazım esnasında anlık bir görüntüdür ve muhtemelen günden güne değişecektir (yukarı veya aşağı). Elbette aşağıda yer alan her seçenek, tüm zincirin sıfıra inmesi genel riskini içerir.
:::

Delta-nötr stratejiler, merkeziyetsiz varlıkların, yani dToken'lerin, havuzundaki %40 APR'ye dayanmaktadır. Bu delta-nötr stratejiler hala olası küçük bir kalıcı olmayan kayba (impermanent loss) tabidir, bu yüzden her zaman bunun için daha az değişken dToken'ların kullanılması önerilir. dToken'lerdeki %20'lik bir hareket, havuzdaki dağılımın değişmesi nedeniyle %0,5'lik bir kayba neden olur.

## Basit, manuel stratejiler {#simple-manual-strategies}

Sıfır veya düşük risk içeren seçeneklerle başlayalım.

DeFiChain'de _Manuel nakit akışı seçenekleri_  
![DeFiChain üzerinde manuel nakit akışı seçenekleri](./../media/cashflow_options_TR_01.png)

### Staking DFI {#staking-dfi}

- Yatırım: **%100 DFI**
- Risk: merkezi hizmetin karşı taraf riski
- Ödüller: **DFI için %20,8 APY veya %23,7 APR**

Staking en basit ama yine de oldukça etkili bir seçenektir: Cake veya DFX hesabınıza istediğiniz miktarda DFI yollayıp staking sayesinde nakit akışı alın. Hatta tercih etmeniz durumunda sizin için elde ettiğiniz staking ödüllerinizi otomotik olarak tekrar staking'e ekleyerek daha avantajlı bileşik faizden yararlanmanızı sağlarlar.

20 bin DFI'nız varsa kendi [masternode](./Masternode.md)'unuzu da çalıştırabilirsiniz. Böylece karşı taraf riskini azaltır ve ödülünüzü artırmış olursunuz.

İlaveten stake ettiğiniz DFI'lerinizi 5 veya 10 yıllığına dondurmanız (kilitlemeniz) durumunda 1.5 veya 2 kat ödül kazanabilirsiniz. (%35 APR için 5, %47 APR için 10 yıl)

### Likidite Madenciliği stablecoin havuzları {#lm-stablecoin-pools}

- Yatırım: **%50 DUSD + %50 (USDT veya USDC)**
- Risk: Kalıcı olmayan kayıp (DUSD volatilitesinden kaynaklı)
- Ödüller: DFI olarak **%36-45**

Varlıklarınızın DUSD ve USDC/T'ye eşit parçalara bölünmesi gerekir. Buna sahipseniz, burası sabit dolar coinlerden getiri elde etmek için harika bir yerdir.

### Likidite Madenciliği kripto havuzları {#lm-crypto-pools}

- Yatırım: **50 DFI + %50 diğer kriptolar** (BTC, ETH, USDT, USDC, DUSD, LTC, BCH, DOGE)
- Risk: Kalıcı olmayan kayıp (DFI'ın diğer kriptolara karşı hareketi)
- Ödüller: DFI olarak **%11-40**

Varlıklarınızın DFI ve diğer kriptolara eşit parçalara bölünmesi gerekir. Buna sahipseniz, burası mevcut kripto varlıklarınızı kullanarak getiri elde etmek için harika bir yerdir.

### Likidite Madenciliği dStock havuzları {#lm-dstock-pools}

- Yatırım: **%50 DUSD +%50 dStock** (SPY,QQQ,TLT,GLD,TSLA,GME...)
- Risk: Kalıcı olmayan kayıp
- Ödüller: DFI olarak **%10-40**

Bu, özellikle kripto dışı varlıklara konsantre olmak istiyorsanız, çeşitlendirilmiş hisse senedi portföyünüzden nakit akışı elde etmenin en iyi yoludur.

## Kasa (vault) ile manuel stratejiler {#manual-strategies-with-vaults}

DeFiChain'deki kasalar inanılmaz araçlardır, ancak onları güvenli bir şekilde kullanmak için onları iyi anlamanız gerekir. Çok karışık geliyor ve aklınıza yatmıyorsa yukardaki seçenekler sizin için daha uygun olacaktır.

_Manuel olarak yapılabilecek kasa stratejileri_  
![Manuel olarak yapılabilecek kasa stratejileri](./../media/cashflow_options_TR_02.png)

### Döngülü DUSD kasası {#looped-dusd-vault}

- Yatırım: **%100 DUSD**
- Risk: "yok" (negatif faizin ortadan kalktığı ve faiz ödemeye başladığınız zamanı gözden kaçırmak dışında)
- Ödüller: DUSD olarak **%30**

Diğer tüm seçeneklerin aksine, bu stratejideki ödüller çüzdanınıza ödenmek yerine kredi tutarınızı azaltır. Bileşik negatif faiz için daha fazla kredi almanız (ve tekrar döngü yapmanız) gerekir ki bu da FCE güncellemesinden sonra mümkün olmayacaktır. (FCE güncellemesinden sonra DUSD kasalarıyla DUSD kredisi çekmek mümkün olmayacaktır.)

Elinizdeki DUSD'yi düşük/sıfır risk ile faizlendirmek için bu oldukça cazip bir seçenektir.

### DUSD kasası + delta-nötr LM {#dusd-vault--delta-neutral-lm}

- Yatırım: **%100 DUSD**
- Risk: dToken'lerin fiyat hareketlerinden doğan kalıcı olmayan kayıp + teminat oranınıza bağlı olarak kasanızı izlemeniz gerekir
- Ödüller: DFI olarak **%28-30** (teminat oranının %180 ile %200 arasında tutulması durumunda)

DUSD'nizin bir kısmını kasanıza teminat olarak yatırın ve seçtiğiniz bir dToken'ı basın. Yeni üretmiş olduğunuz dToken miktarının kalan DUSD ile aynı olmasına dikkat edin. Şimdi bunları likidite madenciliği havuzunda bir araya getirebilirsiniz. Bu delta-nötr bir stratejidir, çünkü dToken'da ne long ne de short'sunuz. Kasaya borçlusunuz, ancak aynı zamanda LM havuzunda bulunan aynı miktarda dToken'a sahipsiniz, yani istediğiniz zaman kasaya olan borcunuzu LM havuzundan ayrılarak kapatabilirsiniz.

DUSD'nin bir sonraki güncellemeden sonra teminat olarak 1,2 $ değerinde sayılmasıyla, muhtemelen döngülü DUSD kasasından bile daha karlı bir seçenek haline gelecektir. Özellikle DFI yükseldiğinde bu daha da karlı hale gelir.

Ancak kendinizi rahat hissedeceğiniz bir teminat oranı seçtiğinizden emin olun. DUSD kasada sabit olduğundan, bu durumda %180'lik bir oran, dToken'ınızın likide edilmeden önce %20 yükselebileceği anlamına gelir. Dolayısıyla, düşük volatiliteli bir token seçerseniz, günlük olarak izlemek yeterli olabilir.

Bu fikri beğendiyseniz ancak kasanızı manuel olarak izlemek/ayarlamak istemiyorsanız, aşağıda bahsi geçen otomatik seçeneklere göz atabilirsiniz.

## Vault-maxi gibi botlarla ek stratejiler {#additional-strategies-with-bots-like-vault-maxi}

Kasalarla ilgili ana risk, seçtiğiniz teminat oranının altına inmeniz durumunda gerçekleşecek olan likidasyondur. Teminat oranında yeterli tampon bulundurarak bunu önleyebilirsiniz. Ancak bu, karlılığınızı önemli ölçüde azaltacaktır.

Vault-maxi gibi botlar, kasanızı sürekli izleyerek ve her zaman tanımlanan aralıkta kalmasını sağlayarak burada yardımcı olabilir.

Ancak botların denkleme yeni riskler de eklediğini unutmayın! (kod hataları, bulut sağlayıcı kesintileri, hack'ler vb.) \*\*Botları yalnızca beraberinde gelen tüm riskleri anlıyor ve kabul ediyorsanız kullanın.

Botları daha derinlemesine incelemek istiyorsanız, vault-maxi harika bir seçenektir. v2.3 ([kurulum kılavuzu ile GitHub'da yayınlandı](https://github.com/kuegi/defichain_maxi/releases/tag/v2.3)) burada gösterilen tüm seçenekleri sağlar. Vault-maxi'nin kurulumunun çok karmaşık olmasından korkuyorsanız, bu videoyu izleyin ve kendiniz karar verin: https://youtu.be/NOeXa69Z4GU

Aşağıdaki stratejiler %160'lık bir hedef teminat oranını varsaymaktadır.

_Vault-maxi_ aracılığıyla nakit akışı seçenekleri  
![Cashflow options via vault-maxi](../media/cashflow_options_TR_03.png)

### DUSD kasası + delta-nötr LM {#dusd-vault--delta-neutral-lm-1}

- Yatırım: **DUSD (%66 - %100)** + herhangi bir BTC, ETH, USDT, USDC, DFI karışımı
- Risk: botların çalıştırılmasıyla ilgili tüm riskler + Kalıcı olmayan kayıp
- Ödüller: DFI olarak **%30,3-32,1**

Vault-maxi'nin tek-mint modu, stratejiyi yukarıdan otomatikleştirmenize olanak tanır (DUSD'yi teminattan alın ve dToken basın). Bu şekilde kendiniz herhangi bir hesaplama yapmanıza gerek kalmaz ve ödüllerin tadını güvenle çıkarabilirsiniz.

### DFI kasası + tek-mint delta-nötr LM {#dfi-vault--single-mint-delta-neutral-lm}

- Yatırım: **DFI (en az %70)** + herhangi bir BTC, ETH, USDT, USDC, DUSD karışımı
- Risk: botların çalıştırılmasıyla ilgili tüm riskler + Kalıcı olmayan kayıp
- Ödüller: DFI olarak **%24,6**

Strateji DUSD versiyonundaki ile aynıdır, ancak teminattan DFI kullanır ve DUSD basar. DEX-ücret ödemesi ile bu strateji DUSD kredisi üzerinden ek ödüller alır. LM için DUSD-DFI havuzu kullanılır.

### Karışık kasa + çift mint delta-nötr LM {#mixed-vault--double-mint-delta-neutral-lm}

- Yatırım: **>%50 DFI** + BTC, ETH, USDT, USDC, DUSD'nin herhangi bir karışımı
- Risk: botların çalıştırılmasıyla ilgili tüm riskler + Kalıcı olmayan kayıp
- Ödüller: DFI olarak **%28,4**

Çift mint durumunda, hem DUSD hem de dToken kasadan basılır ve likidite madenciliği havuzuna konur. Aynı şekilde, DUSD için negatif faiz oranı bu strateji için ödülleri artırır. Güncelleme ile teminatın en az %50'si DFI olmak zorunda.

## Özet {#summary}

_Tüm farklı seçeneklere genel bakış_  
![Tüm farklı seçeneklere genel bakış](../media/cashflow_options_TR_04.png)

Gördüğünüz gibi, bu güzel ekosistemde nakit akışı için birden fazla yol vardır.
