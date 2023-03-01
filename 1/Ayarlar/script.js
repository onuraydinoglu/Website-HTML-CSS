$(document).ready(function(){
    /* UFAK CİHAZLAR İÇİN MENU AÇMA BUTONUNUN İŞLEMLERİ */
    $("#HeaderMenuAcmaButonuAlani").on("click", function(){
        $("#HeaderMenuAcmaButonuMenuSinirlamaAlani").slideToggle("slow");
    });
    /* UFAK CİHAZLAR İÇİN MENU AÇMA BUTONUNUN İŞLEMLERİ */
    
    /* MAIN - FOOTER ALANI İÇİN ÜSTEN BOŞLUK HESAPLAMALARI*/
    var DocumanGenisligi    =   $(window).outerWidth();
    
    if(!$("#HeaderMesajAlani").length){
        if(DocumanGenisligi>=1200){
            var OsfetDegeri      =   108;
        }else if((DocumanGenisligi>=992) && (DocumanGenisligi<=1199)){
            var OsfetDegeri      =   98;
        }else if((DocumanGenisligi>=768) && (DocumanGenisligi<=991)){
            var OsfetDegeri      =   88;
        }else if((DocumanGenisligi>=576) && (DocumanGenisligi<=767)){
            var OsfetDegeri      =   78;
        }else if(DocumanGenisligi<=574){
            var OsfetDegeri      =   78;
        }
    }else{
        if(DocumanGenisligi>=1200){
            var OsfetDegeri      =   148;
        }else if((DocumanGenisligi>=992) && (DocumanGenisligi<=1199)){
            var OsfetDegeri      =    38;
        }else if((DocumanGenisligi>=768) && (DocumanGenisligi<=991)){
            var OsfetDegeri      =   118;
        }else if((DocumanGenisligi>=576) && (DocumanGenisligi<=767)){
            var OsfetDegeri      =   108;
        }else if(DocumanGenisligi<=574){
            var OsfetDegeri      =   103;
        }
    }
    $("main").css("top", OsfetDegeri);
    $("footer").css("top", OsfetDegeri);
    /* alert(DocumanGenisligi); */ 
    
    $(window).resize(function(){
       var DocumanGenisligi    =   $(window).outerWidth();

        if(!$("#HeaderMesajAlani").length){
            if(DocumanGenisligi>=1200){
                var OsfetDegeri      =   108;
            }else if((DocumanGenisligi>=992) && (DocumanGenisligi<=1199)){
                var OsfetDegeri      =   98;
            }else if((DocumanGenisligi>=768) && (DocumanGenisligi<=991)){
                var OsfetDegeri      =   88;
            }else if((DocumanGenisligi>=576) && (DocumanGenisligi<=767)){
                var OsfetDegeri      =   78;
            }else if(DocumanGenisligi<=574){
                var OsfetDegeri      =   78;
            }
        }else{
            if(DocumanGenisligi>=1200){
                var OsfetDegeri      =   148;
            }else if((DocumanGenisligi>=992) && (DocumanGenisligi<=1199)){
                var OsfetDegeri      =   138;
            }else if((DocumanGenisligi>=768) && (DocumanGenisligi<=991)){
                var OsfetDegeri      =   118;
            }else if((DocumanGenisligi>=576) && (DocumanGenisligi<=767)){
                var OsfetDegeri      =   108;
            }else if(DocumanGenisligi<=574){
                var OsfetDegeri      =   103;
            }   
        }
        $("main").css("top", OsfetDegeri);
        $("footer").css("top", OsfetDegeri); 
    });
    /* MAIN - FOOTER ALANI İÇİN ÜSTEN BOŞLUK HESAPLAMALARI */
    $.SSSIceriginiGoster    =   function(ElemanID){
        var SoruIDsi           =   ElemanID;
        var IslenecekAlan       =   "#" + SoruIDsi;
        
        $(".TamSayfaCerceveAlaniIciSSSSoruIcerigiAlani").slideUp();
        $(IslenecekAlan).parent().find(".TamSayfaCerceveAlaniIciSSSSoruIcerigiAlani").slideToggle();
    }
    /* SSS İÇERİK GÖSTER / GİZLE */
    
    
    /* */
    $.AlisverisSepetiFormGonder    =   function(){
        $("AlisverisSepetiFormu").submit();
    }
    /* */
    
    /* ******* */
    $.AlisveriSepetiOdemeSayfasiIcinKrediKartiSecildi   =   function(){
        $("KrediKartiIleOdemeAlani").css("display", "block");
        $("MobilOdemeIleOdemeAlani").css("display", "none");
        $("BankaHavalesiIleOdemeAlani").css("display", "none");
    }
    
    $.AlisveriSepetiOdemeSayfasiIcinMobilOdemeSecildi   =   function(){
        $("KrediKartiIleOdemeAlani").css("display", "none");
        $("MobilOdemeIleOdemeAlani").css("display", "block");
        $("BankaHavalesiIleOdemeAlani").css("display", "none");
    }
    
    $.AlisveriSepetiOdemeSayfasiIcinBankaHavalesiSecildi   =   function(){
        $("KrediKartiIleOdemeAlani").css("display", "none");
        $("MobilOdemeIleOdemeAlani").css("display", "none");
        $("BankaHavalesiIleOdemeAlani").css("display", "block"); 
    }
    /* ******* */
    
    /* ------------ */
    $(function(){
        var SlaytElementi                   =   $(".SlaytAlaniKapsayicisi");
        var SlaytListeOlusturmaElementi     =   SlaytElementi.find(".SlaytAlaniResimleri");
        var SlaytListesiUzunlugu            =   SlaytListeOlusturmaElementi.find(".SlaytResmi").length;
        var SlaytIcinDokumanGenisligi       =   SlaytElementi.outerWidth();
        var ToplamGenislik                  =   SlaytListesiUzunlugu * SlaytIcinDokumanGenisligi;
        var ResimSirasi                     =   0;
        var KayacakAlan                     =   0;
        
        SlaytListeOlusturmaElementi.find(".SlaytResmi").width(SlaytIcinDokumanGenisligi).end().width(ToplamGenislik);
         
        $(window).resize(function(){
            SlaytElementi                   =   $(".SlaytAlaniKapsayicisi");
            SlaytListeOlusturmaElementi     =   SlaytElementi.find(".SlaytAlaniResimleri");
            SlaytListesiUzunlugu            =   SlaytListeOlusturmaElementi.find(".SlaytResmi").length;
            SlaytIcinDokumanGenisligi       =   SlaytElementi.outerWidth();
            ToplamGenislik                  =   SlaytListesiUzunlugu * SlaytIcinDokumanGenisligi;
            
            SlaytListeOlusturmaElementi.find(".SlaytResmi").width(SlaytIcinDokumanGenisligi).end().width(ToplamGenislik).css("margin-left", "-" + (ResimSirasi * SlaytIcinDokumanGenisligi) + "px");
        });
        
        $.OtomatikDegistir                  =   function(){
            if(ResimSirasi < SlaytListesiUzunlugu - 1){
               ResimSirasi++;
                KayacakAlan                 =   "-" + (ResimSirasi * SlaytIcinDokumanGenisligi) + "px";
            }else{
               ResimSirasi                  =   0;
               KayacakAlan                  =   0;
            }
            
            SlaytListeOlusturmaElementi.stop().animate({
                marginleft:KayacakAlan
            }, 500);
        }
        
        var SlaytOynat                      =   setInterval("$.OtomatikDegistir", 3000);
        
    });
    /* ------------ */  
});