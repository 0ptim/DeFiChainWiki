---
title: Masternode
description: TODO - Bu sayfanın kısa açıklaması.
---

DeFiChain ekosistemindeki Masternode'ların ana görevi Proof Of Stake uzlaşma algoritmasının temel taşlarını oluşturmaktır. 20.000 DFI tutan herkes Masternode kurarak staking ödülleri kazanabilir ve oylamalara katılmaya hak kazanır. DeFiChain üzerindeki bütün gelişmelere Masternode sahipleri karar verirler. Bu, merkeziyetsiz yapının bir gereksinimidir.

## DeFiChain'de Masternode

Ocak 2021'de Masternodelar oylayarak dördüncü Geliştirme Önerisinde (DFIP) masternode kurulum için gerekli olan 1.000.000 DFI'yi 20.000 DFI'ye düşürerek merkeziyetsizlik adına önemli bir adım attılar. Mart 2021'de gerçekleşen DAKOTA isimli hard fork ile bu değişiklik yürürlüge girdi.

### Masternode kurulumu

DeFiChain ağı üzerinde Masternode işletmenin bir çok yolu var.

#### Seçenek 1 - Evde Masternode Kurulumu

İlk seçenek, Kişisel Bilgisayarda, Dizüstü Bilgisayarda veya Apple MacBook'ta veya Ev Ağınızdaki benzer bir donanımda çalıştırmaktır. Donanımı ofisinize, oturma odanıza ve hatta çocuğunuzun odasına bile yerleştirebilirsiniz. Karar verebilirsiniz.

İhtiyacınız olan tek şey:

- İnternet bağlantısı (statik IP gerekmez)
- Herhangi bir donanıma yüklü uygulama/cüzdan (DEX)
- Bu Cüzdanda Masternode için gerekli 20.000 DFI ve ücretler için 11 DFI. (Toplam 20.011 DFI)

**Artıları:**

- Bu en basit kurulumdur ve çalıştırmak için yalnızca birkaç tıklamaya ihtiyacınız vardır.
- Ekstra Donanıma ihtiyacınız yok, mevcut makinenizi üzerindeki cüzdan ile kullanabilirsiniz.

**Eksileri:**

- Makineniz çevrimdışıyken veya internet bağlantınız kapalıyken, ağa ve staking'e katılamazsınız - bu durumda staking ödülleri de kazanamamış olursunuz.
- Masternod'unuzla ağı daha istikrarlı ve güvenli hale getirmek ve diğer Masternode'lar için hizmet sunmak istiyorsanız, 8555 numaralı bağlantı noktasını herkes için harici olarak açmanız gerekir. [^1]
- Portu açtığınızda, wallet.dat dosyanızı halka açık internete sunuyorsunuz, bunun saldırganlar için olası bir hedef olabilme ihtimali vardır.

#### Seçenek 2 - Evde Ownernode ve Operatornode

Bu senaryoda, ev ağınızda iki node veya cüzdan uygulamanız vardır. Bir makine, sahip node (ownernode) olarak hareket eder ve 20.000 DFI Teminatına sahiptir. Bu, Macbook'unuz, Dizüstü Bilgisayarınız veya Kişisel Bilgisayarınız olabilir. Bu makineyi, ihtiyacınız olduğunda, yalnızca bir miktar jeton aktarmak veya DEX, LM kullanmak veya Ödülleri başka bir adrese göndermek için çalıştırırsınız; dolayısıyla sürekli çalışmasıne gerek yoktur.

Diğer makine, operatör görevi gören Operatornode'unuzdur. Bu, başka bir Dizüstü Bilgisayar veya PC veya Raspberry veya bir ev sunucusu olabilir. Üzerinde yalnızca gerçek node sürümüne ihtiyacınız var. Teminat yok, cüzdan uygulaması gerekmez. Ağ hizmetlerini sunmak ve bu node'u diğer node'lar için genel hale getirmek için yönlendiricinizde 8555 Bağlantı Noktasını bu makineye açabilirsiniz.

Bu node'da jeton veya farklı kripto varlıklar bulunmadığından, güvenlik riski seçenek 1'dekinden çok daha azdır.

**Artıları:**

- Bağlantı Noktasını (Port) yalnızca içinde Jeton veya farklı kripto varlıkları olmayan node'da açılır ve böylece risk büyük oranda düşürülmüş olur.
- Düğümü evde çalıştırmanıza rağmen, ağı Port 8555 üzerinden stabilize edersiniz (yalnızca statik IP ile mümkündür.)

**Eksileri:**

- Operatornode'unuz çevrimdışı olduğunda veya internet bağlantınız kesildiğinde, ağa ve stake etmeye katılamazsınız - bu durumda staking gelirleri elde etmemiş olursunuz.
- Ev donanımı 7/24 kesintisiz çalışmaya pek uygun değildir (Güç Kaynağı, SSD veya başka bir disk vb.) Donanım hasarı riski vardır.
- Operatornode için başka bir cihaza ihtiyacınız var
- Node'unuzu ağa sunmak için statik bir IP Adresine ihtiyacınız var.
- 8555 numaralı bağlantı noktası (port) herkes için Ev Ağınıza harici olarak açık olur
- Kararsız veya yavaş bir internet bağlantısı (yükleme/upload), ağın kararlılığı için kötüdür

#### Seçenek 3 - Evde Ownernode ve Veri Merkezinde Operatornode

En çok tercih edilen senaryo, "Bulutta" Operatornode ile bir Sıcak/Soğuk cüzdan çözümüdür. Uygulamadaki cüzdanınız, seçenek 2'deki gibi evde kendi makinenizde çalışır. (En iyi durumda, "Soğuk-Cüzdan" olarak Ledgersupport ile.)

Bu cüzdan 20.000 DFI teminat içerir ve yalnızca cüzdanınız veya Node'unuzla kullanmak istediğinizde aktif olması gerekir; dolayısıyla sürekli çalışır halde olmasına gerek yoktur.

Operatörnode, profesyonel bir veri merkezinde barındırılır. Basit bir sanal sunucu yeterlidir (virtual private server - kısaca: vps), büyük kök sunucu (root server) veya başka bir şeye gerek yoktur.

**Artıları:**

- Evde Port Yönlendirmeye gerek yoktur ve bu büyük bir güvenlik artısıdır.
- Ana Node'unuz (Operatornode) için Yüksek Erişilebilirlik, 7/24 Altyapı ve yedekli İnternet Bağlantısı
- DeFiChain Ağı için Tam Hizmet: yedekli donanıma ve internet bağlantısına sahip yüksek kullanılabilirlikli node, ağı dengeler ve merkeziyetsiz bir yapı için katkıda bulunur.

**Eksileri:**

- Bir veri merkezinde gereken VPS ve onu işlemek ve güncellemek için biraz bilgi. [^2]

[^1]: Stake'e katılmak için Port'u açmanız ZORUNDA DEĞİLDİR , ancak bu açık port olmadan, Ağı stabilize etmeye yardımcı olmazsınız ve hiç kimse düğümünüzü senkronizasyon veya diğer uygulanan özellikler için kullanamaz.
[^2]: VPS ile operatornode hizmeti sağlayan aracı şirketlerden faydalanabilirsiniz.
