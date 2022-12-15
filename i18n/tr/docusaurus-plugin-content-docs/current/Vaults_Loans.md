---
title: Kasalar ve Krediler
description: TODO - Short description of this page.
---

## Kasalar ve Krediler {#vaults-and-loans}

DeFiChain'in en cazip özelliklerinden biri, oluşturduğunuz bir kasaya teminat yatırarak, karşılığında merkeziyetsiz varlıklar şeklinde kredi çekebiliyor olmasıdır. Kasalar birer bankaya benzerler, ancak merkezi değillerdir ve her kullanıcı tarafından oluşturulabiliyorlardır.

### Teminat kuralları {#collateral-rules}

Kullanıcılar kasaya teminat olarak DFI, dBTC, dETH, DUSD, dUSDT ve dUSDC yatırabilirler.

- DUSD kredisi ("DUSD üretimi/basımı") için kasanın %50'si DFI ile teminatlandırılmalıdır.
- Başka bir dToken basarken kasanın %50'si DFI veya DUSD olmalıdır
- [DEX-stabilizasyon ücreti](./DEX_Fee_Structure.md) %1'in üzerinde olduğu sürece, teminattaki DUSD 1.20$ değerinde olacaktır.

### Kasa seçenekleri {#vault-options}

Kasaların teminat oranları %150 ile %1000 arasında seçilebilir. Bu yüzdelik, "Teminatınızın değeri / kredinizin değeri" oranını ifade eder.

Oran ne kadar yüksek olursa, o kadar fazla teminata ihtiyacınız olur fakat kredi için o kadar az faiz ödemeniz gerekir. Kredi faiz oranları olası APR/APY ile karşılaştırıldığında nispeten düşük olduğundan, kasaya çok fazla çalışmayan sermaye kilitlemek tercih edilmez, lakin gerektiğinden yüksek bir oran seçmek karlılık açısından çok verimli olmayacaktır.

Kripto piyasalarındaki hareketler nedeniyle teminat değerinizin çok değişken olduğunu unutmayın. Bu nedenle kasaya tasfiye oranından belirli bir miktar daha fazla teminat konulması tavsiye edilir. Peki ne kadar yüksek olmalı? Bu, kişisel risk tutumunuza bağlıdır - hangi teminatlandırma oranının sizin geceleri iyi bir uyku çekmenize izin vereceğine siz karar verirsiniz. Genel anlamda %150'lik bir kasa'da %200 civarı bir teminatlandırma oranı "güvenli" olarak nitelendirilir, çünkü belli bir seviyeye kadar volatiliteye karşı korunmuş olursunuz.

Teminatlandırma oran, fiyat dalgalanmalarından dolayı seçilen oranın altına düşerse, kasa otomatik olarak tasfiye sürecine gönderilir. Hem teminatınızın değerinin hem de kredinizin değerinin değişken olduğunu unutmayın. Yani her iki taraftaki hareketler oranı etkiler - sadece teminatı değil. Tasfiye durumunda diğer kullanıcılar kasadaki teminatı almak için açık arttırma şeklinde teklif verebilirler (daha fazla bilgiyi aşağıdaki bölümde bulabilirsiniz).

Örnek: Kasanıza teminat yatırdıktan sonra kredi olarak dTSLA çektiniz, yani güncel fiyattan dTSLA üretmiş oldunuz. dTSLA'nın değerleri yükselirse, çektiğiniz kredinin de değeri artar ve böylece teminatlandırma oranınız düşer.

Kullanıcılar, DUSD stablecoin'lerini veya hisse senedi, ETF ve emtia belirteçleri gibi çeşitli dToken'ları bu kredi mekanizması ile üretebilir (minting). Bu, bir yatırımcının birkaç pozisyon (uzun/kısa/nötr) ve birkaç farklı [nakit akışı](./Cashflow_Options.md) pozisyonu almasına izin verir. Bir jetonu short'lamak, bir kredi alıp, hemen satmak ve daha sonra daha ucuza geri almak şeklinde mümkün olur, lakin ödünç alınan jetonun değeri azaldıkça, krediyi geri ödemek için daha az para gerekir. Daha fazla strateji için [merkeziyetsiz varlıklar](./Decentralized_Assets.md) bölümüne bakabilirsiniz.

### DUSD-Kredi 'özel' {#dusd-loan-specials}

Algoritmik DUSD, DFI'li DUSD kredileri için eski bir geri ödeme seçeneğinden kaynaklananlardır (seçenek artık etkin değildir). Destekli DUSD, aktif bir kasa ve teminat ile oluşturulur. Bu makalenin yazıldığı gün itibariyle ekosistemde çok fazla desteklenmemiş, yani algoritmik DUSD var. Topluluğun hedefi, ekosistem içindeki desteklenen token'lerin oranını artırmaktır. Bu nedenle topluluk, DUSD kredileri için teşvik ödemeleri öneren bir DFIP'ye oy verdi. %150 teminat oranıyla çekilmiş kredilerin standart faizi %5'tir.

DUSD kredilerinin yaratılmasını artırmak için ek olarak [DEX-Ücreti](./DEX_Fee_Structure.md) tarafından yakılan DUSD miktarından hesaplanan negatif bir faiz oranı vardır. DEX ücretinin bir yarısı yanıyor ve desteksiz DUSD ("Algo-DUSD") sistemden çıkarken ikinci yarısı ise DUSD kredisi olan kullanıcılara negatif faiz şeklinde ödeniyor. Yakılan miktarın her gün değişiyor olmasından kaynaklı DUSD kredileri için ödenen güncel APR de değişkenlik gösteriyor. Güncel faiz oranına [buradan](https://docs.google.com/spreadsheets/d/11yTO43MBi3WQhtrIwUSpnNMaPVIy8zVVEz8TUyI46VI/edit#gid=2139878934) göz atabilirsiniz.

### Tasfiye Edilen Kasalara Teklif Verme {#bidding-on-liquidated-vaults}

Bazı yatırımcıların kasaları fiyatlardaki ani hareketlerden, ve teminatlandırma oranının çok yakın tutulmasından dolayı, tasfiyeye çıkarılır ve açık arttırma ile satışa sunulur. Kullanıcılar bir saat içinde fiyatlardaki %30'luk bir dalgalanmadan korunsa da, ek teminat yatırmamaları veya kredilerinin bir kısmını (veya tamamını) kapamamaları durumunda, kasaları teminatlandırma oranının altına düşebilir. Sistemde "Tasfiye motoru" veya benzeri bir şey olmadığı için, DeFiChain bu yatırımcıların kasalarını tasfiye etmenin farklı bir yolunu bulmuştur.

Kasalar topluluk tarafından tasfiye edilir. Tasfiye edilen her kasa için sistem tarafından belirlenen minimum teklif tutarı ile altı saatlik bir açık arttırma yapılır. Kullanıcılar ödünç alınan jetonla teklif verir ve karşılığında kazanırlarsa kasanın içindeki teminatı alırlar. Kasa sahibi kazanan teklifi, yakılan %5'lik bir ücret kesintisi ile, alır.

## Özet {#summary}

### Avantajlar {#advantages}

- Hisse senetlerine karşı hedge imkanı
- Kripto pozisyonlarından yararlanma
- Ödünç alınan jeton arzını artırmak ("bir jeton ödünç aldığınızda", aslında yeni jetonlar basar ve arzı arttırırsınız, bu da DeFiChain için olumludur)

### Dezavantajları {#disadvantages}

- Tasfiye riski - Kügi'nin Bot Vault-maxi'si kullanılarak önemli ölçüde azaltılabilir[1](https://github.com/kuegi/defichain_maxi)
- Ödünç alınan jetonlara faiz ödenmesi gerekir

## Kafa Karışıklığına Neden Olan Konular {#common-topics-of-confusion}

Deneyimli kullanıcılar için bile olarak bile kafa karıştırıcı olabilecek fikirler olabilir. En fazla kafa karışıklığına sebep olan konular şunlardır:

### Oracle ve DEX Fiyatları {#oracles-and-dex-prices}

DeFiChain'deki tokenize edilmiş varlıklar her zaman d\[Varlık\] olarak etiketlenir (Örnek: dTSLA). DEX'te takas edildiklerinde, yatırımcılar DEX'teki fiyatın gerçek fiyatla her zaman aynı olmayabileceğini fark edebilirler. Yani, aslında DeFiChain'de iki farklı varlık fiyatı vardır. Birincisi, oracle olarak bilinen merkezi olmayan botların borsalardan (Binance), kripto veri sitelerinden (CoinMarketCap) ve/veya Nasdaq'tan (hisse senetleri ve ETF'ler için) verileri kullandığı varlığın gerçek fiyatıdır. Bu fiyata oracle fiyatı denir ve bir kullanıcı kasasında jeton bastığında jetonu bu fiyattan alır. Öte yandan, DeFiChain yatırımcılarının ve arz ve talebine göre değişen DEX fiyatlarımız var. Bazen yeterli arz/çok fazla talep olmaz. Bu durum merkeziyetsiz varlığın DEX fiyatının gerçek fiyattan (veya oracle fiyatından) daha yüksek olacağı anlamına gelir. Veya, çok fazla arz/çok az talep olabilir, bu da DEX fiyatının daha düşük olacağı anlamına gelir. Likidite madenciliği yaparken veya bir varlığın jetonlarını tutarken, bu fiyattan madencilik yaparsınız veya jetonlarınızı bu DEX fiyatından takas edebilirsiniz.

DEX fiyatlarının gerçek varlığa göre kontrolden çıkması iki mekanizma sayesinde engellenir. Kripto tokenize edilmiş varlıklarda Cake, yatırımcıların kripto varlıklarını DeFiChain'deki tokenize edilmiş varlıklar ile 1'e 1 oranında değiştirmesine izin verir. Bu da DEX fiyatının kripto varlığının gerçek fiyatından çok uzaklaşması durumunda arbitraj fırsatı yaratır. Hisse senetlerine gelince, dVarlıkları haftada bir kez +/- %5'lik bir oracle fiyatına geri getiren "Gelecek Takasları" (Future Swaps) olarak adlandırdık. bu fiyata madencilik yapıyorsunuz veya jetonlarınızı bu DEX fiyatından değiştirebilirsiniz. DEX fiyatlarının gerçek varlığa göre kontrolden çıkması iki nedenden dolayı engellenir. Kripto tokenize edilmiş varlıklarda Cake, yatırımcıların kripto varlığını DeFiChain'deki tokenize edilmiş varlık için 1'e 1 oranında değiştirmesine izin vererek, fiyat kripto varlığının gerçek fiyatından çok uzaklaşırsa bir arbitraj fırsatı yaratır. Hisse senetlerine gelince, dVarlıkları haftada bir kez +/- %5'lik bir oracle fiyatına geri getiren "Gelecek Takasları" olarak adlandırdığımız Future Swap'lar mevcut.

### Açık Artırmalarda Teklif Olmaması {#no-bids-on-auctions}

Bazen bir kasaya teklif vermek kârsız olur ve bu durumda kasa devamlı olarak açık artırmaya çıkarılmaya ve tasfiye edilmeye çalışılır.

### Teminat kuralları kasamda artık geçerli olmadığında tasfiye olur muyum? {#will-i-be-liquidated-when-the-collateral-rules-are-not-valid-anymore-in-my-vault}

Yukarıda belirtildiği gibi bazı teminat kuralları vardır. Başlangıçta %50 DFI ile doğru bir şekilde teminatlandırılmış bir DUSD kredinizin piyasa hareketleri nedeniyle, DFI değerinin teminat tutarının %50'sinin altına düşmesi mümkündür. Pek çok kullanıcı o sırada bir tasfiyeden korkuyor, ancak bu durum tasfiyeye neden olmamaktadır. Sonuç olarak, tekrar %50'lik teminatlandırma düzeyine ulaşılana kadar daha fazla DUSD kredisi alamazsınız.
