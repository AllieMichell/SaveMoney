function sumarNumeros( X,  Y)
{
    var res = x+y;
    return res;
}
//-------------------------ECUACIONES DEL ÁREA DE INTERES-------------------------
function FunTasaInteres(M, C, n)
{
    var TasaInt = (Math.pow(M/C,1/n)-1); //((M/C)^1/n) SEGUN YO ESTA BIEN ESA 
    return TasaInt; 
}
function FunInteres (C, i , t)
{
    var Interes =(C*i*t);
    return Intres; 
}
//INTERES COMO PORCENTAJE
function FunInteresMone(I, C)
{
    var InteresMone = (I/C);
    return InteresMone; 
}
function FunInteresVF (M, C)
{
    var InteresVF = ((M/C)-1);
    return InteresVF; 
}
//INTERES POR PERIODO 
function FunInteresSinC (C, i, n)
{
    var InteresSinC =Math.pow (C(1+i,n));
    return InteresSinC; 
}
function FunInteresConC (C, r, n)
{
    var InteresConC =Math.pow (C(1+(1/r),n*r));
    return InteresConC; 
}
function FunTasasEquivalentes (i, m , j)
{
    var TasasEquivalentes = Math.pow (((1+(i/m),(m/j))-1) * j);
    return TasasEquivalentes; 
}
//INTERES POR PERIODOS DE CAPITALIZACIÓN 
function FunCapitalizaciónDia (i)
{
    var CapitalizaciónDia = (1/365);
    return CapitalizaciónDia; 
} 
function FunCapitalizaciónSema (i)
{
    var CapitalizaciónSema = (i/52);
    return CapitalizaciónSema; 
}
function FunCapitalizaciónQuin (i)
{
    var CapitalizaciónQuin = (i/24);
    return CapitalizaciónQuin; 
}
function FunCapitalizaciónMensu (i)
{
    var CapitalizaciónMensu = (i/12);
    return CapitalizaciónMensu; 
}
function FunCapitalizaciónTrimes (i)
{
    var CapitalizaciónTrimes = (i/4);
    return CapitalizaciónTrimes; 
}
function FunCapitalizaciónTetra (i)
{
    var CapitalizaciónTetra = (i/3);
    return CapitalizaciónTetra; 
}
function FunCapitalizaciónSemes (i)
{
    var CapitalizaciónSemes = (i/2);
    return CapitalizaciónSemes; 
}
function FunCapitalizaciónAnual (i)
{
    var CapitalizaciónAnual = (i/1);
    return CapitalizaciónAnual; 
}
//-------------------------ECUACIONES DEL ÁREA DE PLAZO-------------------------
function FuncPlazoConoMonto (M, r, i)
{
    var PlazoConoMonto = Math.log(((M/r)*i)+i+1)/Math.log(1+i);
    return PlazoConoMonto; 
}
function FunPlazoConVA (i, VA, R)
{
    var PlazoConVA= 1-(Math.log(1+i-(i(VA/R))))/Math.log(1+i); 
    return PlazoConVA; 
}
//-------------------------ECUACIONES DEL ÁREA DE MONTO-------------------------
function FunMontoVA (R, i, n)
{
    var MontoVA = R*((((Math.pow(1+i, n+1))-1)/i)-1);
    return MontoVA; 
}
function FunMontoSinRent (C, I)
{
    var MontoSinRent = (C+I); 
    return MontoSinRent; 
}
function FunDescuento (M, d, t)
{
    var Descuento = (M*d*t); 
    return Descuento; 
}
function FunValorAnticipado (M, D)
{
    var ValorAnticipado = (M-D); 
    return ValorAnticipado; 
}
function FunRentaConoMoto (M, n, i)
{
    var RentaConoMoto = (i * M) / (Math.pow((1 + i), (n + 1)) - (1 + i));
    return RentaConoMoto; 
}
function FunRentaConVA (i, VA, n)
{
    var RentaConVA = (i*VA)/(Math.pow((1+i), ((n*-1)+1)) + (1+i));
    return RentaConVA; 
}
function FunValorActualMCTP (C, i, n)
{
    var ValorActualMCTP = ((C)*Math.pow(1+i , n));
    return ValorActualMCTP; 
}
function FunValorActualTDNPR (R, i, n)
{
    var ValorActualTDNPR = ((R*(1-Math.pow(1-i,-1*n))/1));
    return ValorActualTDNPR; 
}
