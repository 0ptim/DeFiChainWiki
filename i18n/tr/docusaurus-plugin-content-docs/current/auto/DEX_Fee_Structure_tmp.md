---
title: DEX Ücret Yapısı
permalink: /DEX_Fee_Structure/
---

DeFiChain'de token takası yaptığınızda bir ücret alınır. Başlangıçta sadece likidite madenciliği yapan likidite sağlayıcıların aldığı komisyonlar mevcuttu. Ancak, birkaç DFIP oylama sonucu olarak, belirli amaçlar doğrultusunda farklı ücretler getirildi. Bu makale, DeFiChain'deki mevcut DEX ücret yapısını açıklamaktadır.

## Ücretler {#fees}

### Genel Bakış {#overview}

Aşağıdaki şema, DeFiChain'deki swap olarak adlandırdığımız farklı havuz takaslarını göstermektedir. Genelde her bir takas (siyah oklar) için bir komisyon ücreti vardır. Ayrıca DEX sabitleme ücreti (kırmızı ok), BTC ücreti (mor ok) ve dUSD/dToken ücreti (mavi ok) vardır. Kısaca özetlemek gerekirse:

- omisyonlar: %0,2
- dBTC ücreti: %0,1
- dUSD/dToken ücreti: %0.2
- DEX sabitleme ücreti: %0...~34 (algo dUSD kısmına bağlı olarak)

*DeFiChain Dex Ücretleri Şeması*  
![DeFiChain Dex Ücretleri Şeması](./../media/DefiChainDEXFees.png)

### Komisyonlar {#commissions}

Komisyon ücreti şu anda %0,2'dir ve kullanıcıların DEX'te takas etmek istedikleri tokenlerden düşülür. Bu jetonlar, likidite madenciliği yaparak likidite jetonunlarına sahip olan kullanıcılara dağıtılır ve likidite sağlama teşvikinin bir parçasıdır. Komisyon ücreti, DeFiChain'deki genel havuzlarla aynıdır - kripto ve dToken.

[defiscan.live](https://defiscan.live/dex) da her havuzun APR'sini ve fareyi üç mavi noktanın üzerine getirerek blok ödülleri ve komisyonlar arasındaki dağılımı görebilirsiniz. Yüksek işlem hacmi (örneğin değişken piyasa aşamalarında) komisyon kısmını etkileyecektir.

*Defiscan, APR'yi blok ödül ve komisyonlara bölünmüş olarak gösteriyor*  
![Defiscan, APR'yi blok ödül ve komisyonlara bölünmüş olarak gösteriyor](./../media/Defiscan_APR_rewardCommissions.jpg)

### DEX Sabitleme Ücreti {#dex-stabilizing-fee}

DEX sabitleme (dengeleme) ücreti, DeFiChain'deki algoritmik dUSD tokeninin oranına bağlıdır. Algoritmik dUSD'nin %50'nin altında olması durumunda bu ücret %0'dır ve %50'nin üzerinde seviyeye bağlı olarak aşağıdaki grafikte görüldüğü gibi artar.

*Dex Sabitleme Ücreti Şeması*
![Dex Sabitleme Ücreti Şeması](./../media/DEX_stabilizing_fee.jpg)

Dex Sabitleme Ücreti hesaplamasının arkasındaki formül:

``` python
Let ALGO_DUSD_RATIO = 1 - (Loan DUSD / total DUSD supply)
Let COEFFICIENT = 1.8
If ALGO_DUSD_RATIO > 0.5
   DEX stabilization fee = (COEFFICIENT ^ (ALGO_DUSD_RATIO - 0.5)) - 1
Else
   DEX stabilization fee = 0%
```

Artan DEX sabitleme ücreti ile DeFiChain'de dUSD için bir prim görmemiz muhtemel, çünkü dUSD satmak giderek daha pahalı hale geliyor. Premium durumda dUSD satın alırsanız, yatırdığınız dolar değerinden daha az dUSD alırsınız. Bu da kasalar ve krediler yoluyla dUSD üretimini daha cazip hale getiriyor.

### dUSD/dToken fee {#dusddtoken-fee}

dUSD kredileri için DFI geri ödeme işlevinin getirilmesiyle, dUSD ile yapılan her takas için dUSD cinsinden %0,1'lik ek bir ücret getirildi, bkz. [DFIP-2112-A](https://github.com/DeFiCh/dfips/issues/99). Bu, ilgili kredileri kapattıktan sonra algoritmik dUSD'yi kaldırmak için ilk önlemdi.

[DFIP-2203-A](https://github.com/DeFiCh/dfips/issues/127) Vadeli İşlem Swapları ile dTokens'lerin prim ve indirimini işlemek için getirildi. Aynı DFIP'de, dTokens'ta ödenen %0,1'lik bir ücret etkinleştirildi.

Her iki kısım da (toplamda %0.2) artık her dUSD-dToken havuzu için uygulanmaktadır ve dTokens ile takas için toplam %0.4'lük bir ücretle sonuçlanmaktadır. dUSD-DFI da başlangıçta %0,1'e sahipti, ancak daha yeni DFIP'ler nedeniyle artık farklı bir ücret yapısı var (bkz. [DEX stabilizing fee](#dex-stabilizing-fee)).

### BTC ücreti {#btc-fee}

DeFiChain'deki Atomic-Swap'in ilk versiyonunda bir hata vardı ve bir veya daha fazla kullanıcı bunu dBTC oluşturmak için kullandı. Normalde CakeDefi, DeFiChain'deki kripto varlıkları için ağ geçididir ve dToken'ları basarken yerel parayı karşılık gelen blok zincirinin genel olarak bilinen bir adresine koyarlar. Bu istismardan elde edilen dBTC, teminat olmadan basıldı ve topluluk, bunları sistemden daha uzun bir zaman diliminde kaldırmak için mekanizmalar sunmaya karar verdi. Daha fazla ayrıntı için ilgili [DFIP](https://github.com/DeFiCh/dfips/issues/101)'ye bakın.

Bir kısım, dBTC-DFI havuzunu kullanmak için ek bir ücrettir. Her takastan %0,1 ücret dBTC olarak düşülür ve yakılır. Bu dBTC-DFI havuzunun genel ücreti: %0,3
