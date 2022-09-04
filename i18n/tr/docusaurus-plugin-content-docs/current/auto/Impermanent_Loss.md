---
title: Kalıcı Olmayan Kayıp
description: TODO - Bu sayfanın kısa açıklaması.
---

Likidite madenciliği yapanların "impermanent loss", yani kalıcı olmayan kayıp riskini göz önünde bulundurmaları gerekir.

## Kalıcı Olmayan Kayıp Riski Nedir?

Özetle, kalıcı olmayan kayıp, kripto varlıklarınız ile merkeziyetsiz borsalarda likidite madenciliği yapmak ile onları cüzdanınızda tutmak arasında ortaya çıkan olası değer farkıdır.

Merkeziyetsiz borsalarda kullanıcı olarak likidite sağladınız kripto paraların arasındaki makasın büyümesiyle birlikte kalıcı olmayan kayıp oluşur. Bu kripto paralar arasındaki farklılık ne kadar fazla olursa, kalıcı olmayan kayıp o kadar büyük olur. Bu riski göze alan likidite madencileri teşfik etmek için DeFiChain'de madencilik ödüllerinin bir kısmı likidite havuzlarına katılım sağlayan kullanıcılara dağıtılır.

Peki bu risk faktörü neden kalıcı olmayan kayıp olarak adlandırılır?

Çok uç örnekler dışında genelde kayıplar kalıcı uzun vadede kalıcı olmaz ve madencilik ödüllerin bir kısmının likidite sağlayıcılarına dağıtılması ile birlikte kar ile sonuçlanır. Likidite madenciliği yaparken iki farklı kripto varlık ile havuza katılırsınız; örneğin DUSD-USDC gibi. Kalıcı kayıp yaşayabilmeniz için bu iki kripto varlıktan bir tanesinin değeri sıfırlanması veya çok düşmesi gerekir. DUSD-USDC havuzunda bu kalıcı olmayan kayıp riski oldukça düşüktür, çünkü her iki varlık da 1 USD'a yakın seyir eder ve aradaki makasın normal şartlarda çok fazla yükseldiğini görmeyiz.

Öte yandan örnek olarak BTC-DFI havuzuna bakarsak, genel olarak bugüne kadar paralel hareket etme eğilimi göstermiş olsalar da aradaki makasın artma ihtimali daha olasıdır.

### BTC-DFI Likidite Madenciliği Örneği

Kurların sürekli değişmesinden dolayı, vereceğimiz örnekte hesabı kolaylaştırmak için 1 BTC'nin karşılığının tam olarak 1.000 DFI olduğunu var sayıyoruz. (Bu gerçek kuru yansıtmamaktadır.)

BTC-DFI havuzunda şu anda 9.000 DFI ve 9 BTC olduğunu var sayalım. Havuzun an itibari ile oranı 1.000 DFI / 1 BTC'dir. Birisi likidite eklediğinde, tam olarak bu oranda eklemelidir. Havuza 1.000 DFI ve 1 BTC eklerler (2.000 DFI değerinde), bu da havuz boyutunun artık 10.000 DFI ve 10 BTC olduğu anlamına gelir. Yani havuzdaki payları %10'dur, yani para çekmek istediklerinde likidite havuzunun %10'unu kaldırabilirler. Diyelim ki aniden, BTC'nin DFI'ye karşı fiyatı 4 kat artar. Havuzun yeni oranı olan 4.000 DFI / 1 BTC'ye sahip olması için havuzun yeniden dengelenmesi gerekir. Ancak, 100.000 (iki havuzun likidite miktarları birlikte çarpılır) veya 10.000 DFI * 10 BTC olan xy sabitini korumalıdır. Her iki koşulu da yerine getirmek için havuzdaki BTC miktarı 5'e düşerken DFI miktarı 20.000'e çıkar. Bu, havuza DFI ekleyen ve BTC'yi kâr için (sağlayıcıların pahasına) satmak için alan arbitrajcılar tarafından gerçekleşir. Şimdi yatırımcı %10 hissesini çıkarırsa 0,5 BTC ve 2.000 DFI alacaktır. BTC'lerini satabilir ve 2.000 DFI daha alırlar. Şimdi orijinal 2.000 DFI'larından %100 artışla 4.000 DFI'ye sahipler. Bununla birlikte, 1 BTC'lerini ve 1.000 DFI'larını yeni tutmuş olsalardı, tüm BTC'lerini 4.000 DFI ile değiştirebilirler ve bunun yerine 5.000 DFI'ye sahip olacaklardı, bu da kalıcı olarak 1.000 DFI veya %20'lik bir kayıpla sonuçlanacaktı.

**Kalıcı olmayan kayıp ile ilgili ayrıntılı bir açıklamayı burada bulunabilirsiniz (inglizce):**

https://julianhosp.com/impermanent-loss-other-liquidity-mining-risks-explained/

**Kalıcı kolmayan kayıp'ları hesaplamak için bir hesap makinesi burada:**

https://defichain-einstein.com/
