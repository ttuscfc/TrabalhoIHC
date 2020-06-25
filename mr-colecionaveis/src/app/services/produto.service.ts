import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  public produtos: Produto[] = [
    {
      nome: "DARKSEID - DC COMICS - PREMIUM FORMAT - SIDESHOW COLLECTIBLES",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/d/a/darkseid-premium-format-sideshow.jpg",
      preco: 5999
    },
    {
      nome: "SHIN AKUMA (10 YEARS) - STREET FIGHTER - ULTIMATE EX - POP CULTURE SHOCK",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/a/k/akuma.jpg",
      preco: 7599
    },
    {
      nome: "KONG 2.0 (DELUXE) - KONG: SKULL ISLAND - SOFT VYNIL STATUE - STAR ACE",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/k/o/kong3_2.jpg",
      preco: 1639
    },
    {
      nome: "PERONA - ONE PIECE - LADY EDGE: WEDDING - BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/p/e/perhona.jpg",
      preco: 199
    },
    {
      nome: "UZUMAKI NARUTO - NARUTO SHIPPUDEN - VIBRATION STARS - BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/n/a/narutovibra4_1.jpg",
      preco: 224
    },
    {
      nome: "KIN EMON (WANO COUNTRY) - ONE PIECE - DXF GRANDLINE MEN VOL. 4 - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/k/i/kin.jpg",
      preco: 224
    },
    {
      nome: "MONKEY D. LUFFY (WANO COUNTRY) - ONE PIECE - KING OF ARTIST - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/l/u/luffy_5.jpg",
      preco: 224
    },
    {
      nome: "SABO - ONE PIECE - MANIA - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/a/sabo_4.jpg",
      preco: 224
    },
    {
      nome: "GOKU - DRAGON BALL SUPER - MAXIMATIC VOL. 1 - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/g/o/gokumaxi.jpg",
      preco: 224
    },
    {
      nome: "CHEELAI - DRAGON BALL SUPER: BROLY - WORLD FIGURE COLOSSEUM 2 - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/c/h/cheelai2.jpg",
      preco: 224
    },
    {
      nome: "BROLY (FULL POWER) - DRAGON BALL SUPER: BROLY - WORLD FIGURE COLOSSEUM 2 - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/r/broly2_4.jpg",
      preco: 224
    },
    {
      nome: "MAJIN VEGETA SUPER SAIYAN - DRAGON BALL Z: DOKKAN BATTLE - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/m/a/majin2.jpg",
      preco: 224
    },
    {
      nome: "GOKU SUPER SAIYAN 2 - DRAGON BALL Z: DOKKAN BATTLE - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/g/o/gokuss2-2.jpg",
      preco: 224
    },
    {
      nome: "KATSUKI BAKUGO - MY HERO ACADEMIA - KING OF ARTIST - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/a/bakugo_1.jpg",
      preco: 224
    },
    {
      nome: "IZUKU MIDORIYA - MY HERO ACADEMIA - KING OF ARTIST - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/m/i/midoriya_1_2.jpg",
      preco: 224
    },
    {
      nome: "VEGETTO (FINAL KAMEHAMEHA VER. 6) - DRAGON BALL SUPER - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/v/e/vegettokame6-2.jpg",
      preco: 224
    },
    {
      nome: "VEGETTO (FINAL KAMEHAMEHA VER. 4) - DRAGON BALL SUPER - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/v/e/vegettokame4-2.jpg",
      preco: 224
    },
    {
      nome: "VEGETTO (FINAL KAMEHAMEHA VER. 1) - DRAGON BALL SUPER - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/v/e/vegettokame1-2.jpg",
      preco: 224
    },
    {
      nome: "GOGETA - DRAGON BALL SUPER: BROLY - MASTER STARS PIECE - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/g/o/gogetabroly.jpg",
      preco: 634
    },
    {
      nome: "GOGETA SUPER SAIYAN BLUE - DRAGON BALL SUPER: BROLY - MASTER STARS PIECE - THE BRUSH - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/g/o/gogetassbluebroly.jpg",
      preco: 634
    },
    {
      nome: "HIMIKO TOGA - MY HERO ACADEMIA - FIGURE COLOSSEUM VOL. 5 - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/h/i/himiko2.jpg",
      preco: 249
    },
    {
      nome: "TANJIRO KAMADO - DEMON SLAYER - VOL. 6 - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/t/a/tanjiro.jpg",
      preco: 224
    },
    {
      nome: "GIYU TOMIOKA - DEMON SLAYER - VOL. 6 A - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/t/o/tomioka2.jpg",
      preco: 224
    },
    {
      nome: "GAARA - NARUTO SHIPPUDEN - VIBRATION STARS - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/g/a/gaara2.jpg",
      preco: 224
    },
    {
      nome: "GOGETA SUPER SAIYAN BLUE - DRAGON BALL SUPER - WARRIORS BATTLE RETSUDEN CHAPTER 5 - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/g/o/gogetassblue.jpg",
      preco: 224
    },
    {
      nome: "THE BRIDE 1/6 SCALE FIGURE - KILL BILL VOL. 1 - STAR ACE",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/r/bride3.jpg",
      preco: 2469
    },
    {
      nome: "THE FLASH SIXTH SCALE FIGURE - DC COMICS - SIDESHOW COLLECTIBLES",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/f/l/flash_1.jpg",
      preco: 2699
    },
    {
      nome: "LUKE SKYWALKER (DELUXE) - STAR WARS: RETURN OF THE JEDI - HOT TOYS",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/l/u/luke_1_4.jpg",
      preco: 3749
    },
    {
      nome: "IRON MAN MARK XLIII (DIECAST) - AVENGERS: AGE OF ULTRON - HOT TOYS",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/m/a/markxliii2.jpg",
      preco: 3999
    },
    {
      nome: "QUICO 1/10 ART SCALE - CHAVES - IRON STUDIOS",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/q/u/quico.jpg",
      preco: 379
    },
    {
      nome: "SENHOR BARRIGA 1/10 ART SCALE - CHAVES - IRON STUDIOS",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/a/barriga4.jpg",
      preco: 379
    },
    {
      nome: "SPIDER-MAN (ADVANCED SUIT) - MARVEL GAMERVERSE - POP CULTURE SHOCK",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/p/spider_9.jpg",
      preco: 394
    },
    {
      nome: "BISON - STREET FIGHTER - S.H.FIGUARTS - BANDAI",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/i/bison.jpg",
      preco: 649
    },
    {
      nome: "JIREN - DRAGON BALL SUPER - S.H.FIGUARTS - BANDAI",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/j/i/jiren.jpg",
      preco: 589
    },
    {
      nome: "PACK HARRY POTTER - S.H.FIGUARTS - BANDAI",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/p/a/packharry.jpg",
      preco: 1246
    },
    {
      nome: "PACK TOY STORY - MINI EGG ATTACK - BEAST KINGDOM",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/t/o/toystoryminiegg.jpg",
      preco: 536
    },
    {
      nome: "PACK TERMINATOR - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/p/a/packterminator.jpg",
      preco: 677
    },
    {
      nome: "PACK MARVEL - D-STAGE - BEAST KINGDOM",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/p/a/packdstage.jpg",
      preco: 1227
    },
    {
      nome: "PACK TEENAGE MUTANT NINJA TURTLES - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/p/a/packturtles.jpg",
      preco: 1776
    },
    {
      nome: "PACK TOONY TERRORS - 6\" SCALE ACTION FIGURE - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/t/o/toonyterrors_2-min_3_1.jpg",
      preco: 476
    },
    {
      nome: "NAZGUL DELUXE - THE LORD OF THE RINGS: THE FELLOWSHIP OF THE RINGS - DEFO-REAL SERIES - STAR ACE",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/n/a/nazgul2.jpg",
      preco: 659
    },
    {
      nome: "CAPTAIN MARVEL - CAPTAIN MARVEL (2019) - Q-FIG - QUANTUM MECHANIX",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/c/a/capmarvelqfig4.jpg",
      preco: 134
    },
    {
      nome: "FREDDY KRUEGER - A NIGHTMARE ON ELM STREET - Q-FIG - QUANTUM MECHANIX",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/f/r/freddyqfigversao2_1.jpg",
      preco: 134
    },
    {
      nome: "WOLVERINE - MARVEL COMICS - D-STAGE - BEAST KINGDOM",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/w/o/wolverinedstage-min.jpg",
      preco: 409
    },
    {
      nome: "IRON SPIDER-MAN - MARVEL COMICS - D-STAGE - BEAST KINGDOM",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/p/spiderbk3.jpg",
      preco: 409
    },
    {
      nome: "SNOW WHITE - DISNEY - D-STAGE - BEAST KINGDOM",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/n/snowwhitedstage-min.jpg",
      preco: 329
    },
    {
      nome: "ALICE IN WONDERLAND - DISNEY - D-STAGE - BEAST KINGDOM",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/a/l/alicedstage.jpg",
      preco: 329
    },
    {
      nome: "DEADPOOL AMBUSH - MARVEL COMICS - MINI EGG ATTACK - BEAST KINGDOM",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/d/e/deadpoolminiegg2.jpg",
      preco: 149
    },
    {
      nome: "SAKURA (ROUND 2) - STREET FIGHTER - BISHOUJO STATUE - KOTOBUKIYA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/a/sakura-min.jpg",
      preco: 749
    },
    {
      nome: "FREDDY KRUEGER - A NIGHTMARE ON ELM STREET - MEGA SCALE TALKING (MEGA DESIGNER SERIES) - MEZCO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/f/r/freddymega.jpg",
      preco: 659
    },
    {
      nome: "CATWOMAN - BATMAN: RETURNS - LIVING DEAD DOLLS - MEZCO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/c/a/catwoman2_3.jpg",
      preco: 329
    },
    {
      nome: "THANOS - AVENGERS: ENDGAME - MARVEL MILESTONES STATUE - DIAMOND",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/t/h/thanosdiamond-min.jpg",
      preco: 4589
    },
    {
      nome: "DEADPOOL (UNMASKED) - MARVEL COMICS - MARVEL GALLERY - DIAMOND",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/d/e/deadpoolgallery.jpg",
      preco: 349
    },
    {
      nome: "MICHAEL MYERS - HALLOWEEN (2018) - 8\" CLOTHED ACTION FIGURE - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/h/a/halloween2.jpg",
      preco: 264
    },
    {
      nome: "ELLEN RIPLEY - ALIEN RESURRECTION - 7\" SCALE ACTION FIGURE SERIES 14 - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/a/l/alienassortment5.jpg",
      preco: 249
    },
    {
      nome: "FREDDY KRUEGER - NIGHTMARE ON ELM STREET - 7\" CLASSIC VIDEO GAME APPEARANCE - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/f/r/freddyneca.jpg",
      preco: 264
    },
    {
      nome: "SAMURAI KYLO REN - STAR WARS - MEISHO MOVIE REALIZATION - BANDAI",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/k/y/kylorenmeisho3.jpg",
      preco: 574
    },
    {
      nome: "BROOK (HUMMING) - ONE PIECE - FIGUARTSZERO - BANDAI",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/r/brook_2.jpg",
      preco: 329
    },
    {
      nome: "NICO ROBIN (DEVIL CHILD) - ONE PIECE - FIGUARTSZERO - BANDAI",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/n/i/nicorobin.jpg",
      preco: 264
    },
    {
      nome: "SHOTO TODOROKI - MY HERO ACADEMIA - FIGURE COLOSSEUM VOL. 3 - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/h/shototodokori-min.jpg",
      preco: 194
    },
    {
      nome: "EUGEO - SWORD ART ONLINE: ALICIZATION - PRIZE FIGURE - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/e/u/eugeo-alicization-sword-art-online-01.jpg",
      preco: 194
    },
    {
      nome: "HATAKE KAKASHI - NARUTO SHIPPUDEN - VIBRATION STARS - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/n/a/naruto-shippuden-vibration-stars-hatake-kakashi-01.jpg",
      preco: 214
    },
    {
      nome: "GOTENKS - DRAGON BALL Z - GRANDISTA RESOLUTION OF SOLDIERS - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/g/r/grandista-resolution-of-soldiers-gotenks-04.jpg",
      preco: 214
    },
    {
      nome: "XENO GOKU SUPER SAIYAN 4 - SUPER DRAGON BALL HEROES - 9TH ANNIVERSARY - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/u/super-dragonball-heroes-9th-anniversary-figure-super-saiyan-4-son-gokou-xeno-02-min.jpg",
      preco: 194
    },
    {
      nome: "EIJIRO KIRISHIMA - MY HERO ACADEMIA - AGE OF HEROES VOL. 5 - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/r/e/red-riot-my-hero-academia-01.jpg",
      preco: 194
    },
    {
      nome: "TOMURA SHIGARAKI - MY HERO ACADEMIA - FIGURE COLOSSEUM VOL. 4 - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/t/o/tomurashigaraki-min.jpg",
      preco: 214
    },
    {
      nome: "OKIKU - ONE PIECE - GLITTLER & GLAMOUR - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/o/k/okiku2.jpg",
      preco: 194
    },
    {
      nome: "VEGITO SUPER SAIYAN GOD SUPER SAIYAN - DRAGON BALL: SUPER - WARRIORS BATTLE RETSUDEN CHAPTER 5 - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/v/e/vegetto-chosenshiretsuden4-min.jpg",
      preco: 194
    },
    {
      nome: "GOKU SUPER SAIYAN - DRAGON BALL Z: WRATH OF THE DRAGON - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/d/r/dragonball-gt-wrath-of-the-dragon-super-saiyan-son-gokou-01.jpg",
      preco: 194
    },
    {
      nome: "GOKU - DRAGON BALL Z: WRATH OF THE DRAGON - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/d/r/dragonball-gt-wrath-of-the-dragon-son-goku-02.jpg",
      preco: 194
    },
    {
      nome: "KIRITO - SWORD ART ONLINE: ALICIZATION - EXQ - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/w/sword-art-online-alicization-kirito-figure-tba-02-min.jpg",
      preco: 194
    },
    {
      nome: "BARDOCK - DRAGON BALL Z - PRIZE FIGURE - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/a/bardock-supersaiyan.jpg",
      preco: 194
    },
    {
      nome: "VEGITO SUPER SAIYAN GOD SUPER SAIYAN - DRAGON BALL Z: DOKKAN BATTLE - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/v/e/vegetto-dokkanbattle-min.jpg",
      preco: 194
    },
    {
      nome: "GOKU BLACK - DRAGON BALL LEGENDS - COLLAB - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/g/o/gokublack-collab.jpg",
      preco: 194
    },
    {
      nome: "MONKEY D. LUFFY (WANO COUNTRY) - ONE PIECE - DXF GRANDLINE MEN VOL. 1 - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/l/u/luffy-grandlineman-vol1.jpg",
      preco: 214
    },
    {
      nome: "SHOUTA AIZAWA - MY HERO ACADEMIA - THE AMAZING HEROES VOL. 6 - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/h/shota-amazingheroes-vol6.jpg",
      preco: 194
    },
    {
      nome: "IZUKU MIDORIYA - MY HERO ACADEMIA - FIGURE COLOSSEUM VOL. 1 - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/m/i/midoriya2_1_1.jpg",
      preco: 194
    },
    {
      nome: "GOHAN SUPER SAIYAN - DRAGON BALL Z - WARRIORS BATTLE RETSUDEN CHAPTER 4 - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/o/songohan-chosenshiretsuden-vol4-2-min.jpg",
      preco: 194
    },
    {
      nome: "HERMIONE GRANGER (NORMAL VER.) - HARRY POTTER - Q POSKET - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/h/e/hermione_-_qposket.jpg",
      preco: 199
    },
    {
      nome: "HARRY POTTER WITH HEDWIG (NORMAL VER.) - HARRY POTTER - Q POSKET - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/h/a/harrypotter_-_qposket.jpg",
      preco: 199
    },
    {
      nome: "GOKU SUPER SAIYAN 3 - DRAGON BALL Z - WARRIORS BATTLE RETSUDEN CHAPTER 4 - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/o/songoku-shosenshiretsuden-vol4-2-min.jpg",
      preco: 194
    },
    {
      nome: "LEONARDO VS SHREDDER - TEENAGE MUTANT NINJA TURTLES - 2-PACK - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/l/e/leonardoeshredder-min.jpg",
      preco: 444
    },
    {
      nome: "DONATELLO VS KRANG - TEENAGE MUTANT NINJA TURTLES - 2-PACK - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/d/o/donatellovskrang.jpg",
      preco: 444
    },
    {
      nome: "RAPHAEL VS FOOT SOLDIER - TEENAGE MUTANT NINJA TURTLES - 2-PACK - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/r/a/raphaelvsfootsoldier2-min.jpg",
      preco: 444
    },
    {
      nome: "MICHELANGELO VS FOOT SOLDIER - TEENAGE MUTANT NINJA TURTLES - 2-PACK - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/m/i/michelangelovsfootsoldier-min.jpg",
      preco: 444
    },
    {
      nome: "ULTRAMAN SUIT (VER. 7) - S.H.FIGUARTS - NETFLIX (2019) - BANDAI",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/u/l/ultraman-netflix-adpt-03-min.jpg",
      preco: 409
    },
    {
      nome: "ASHIGARU STORMTROOPER - STAR WARS - MEISHO MOVIE REALIZATION - BANDAI",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/t/stormtrooper2-min.jpg",
      preco: 499
    },
    {
      nome: "HULK - AVENGERS: ENDGAME - S.H.FIGUARTS - BANDAI",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/h/u/hulksh3-min.jpg",
      preco: 649
    },
    {
      nome: "TONY TONY CHOPPER (COTTON CANDY LOVER - HORN POINT VER.) - ONE PIECE - FIGUARTSZERO - BANDAI",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/t/o/tonytony3-min.jpg",
      preco: 229
    },
    {
      nome: "CLASSIC HARLEY QUINN - DC COMICS - HEAD KNOCKER - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/h/a/harley2-min.jpg",
      preco: 214
    },
    {
      nome: "ULTIMATE JASON VOORHEES - FREDDY VS JASON - 7\" SCALE ACTION FIGURE - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/j/a/jasonneca5-min.jpg",
      preco: 264
    },
    {
      nome: "FREDDY KRUEGER - WES CRAVEN'S NEW NIGHTMARE - 8\" CLOTHED FIGURE - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/f/r/freddy-min.jpg",
      preco: 264
    },
    {
      nome: "HULK - AVENGERS: ENDGAME - MARVEL GALLERY DELUXE - DIAMOND",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/h/u/hulk-endgame-deluxe-gallery-01-min.jpg",
      preco: 489
    },
    {
      nome: "SCARLETT - G.I. JOE: A REAL AMERICAN HERO - BISHOUJO STATUE - KOTOBUKIYA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/c/scarlett3-min.jpg",
      preco: 819
    },
    {
      nome: "IRON MAN - MARVEL COMICS - ARTFX PREMIER STATUE - KOTOBUKIYA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/h/o/homemdeferro4-min.jpg",
      preco: 1139
    },
    {
      nome: "JASON VOORHEES - FRIDAY THE 13TH PART III - ONE:12 - MEZCO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/j/a/jasonmezco2-min.jpg",
      preco: 739
    },
    {
      nome: "CYCLOPS - X-MEN - ONE:12 - MEZCO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/c/y/cyclopsmezco2.jpg",
      preco: 819
    },
    {
      nome: "BALROG - THE LORD OF THE RINGS: THE FELLOWSHIP OF THE RINGS - DEFO-REAL SERIES - STAR ACE",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/a/balrog.jpg",
      preco: 979
    },
    {
      nome: "NAZGUL - THE LORD OF THE RINGS: THE FELLOWSHIP OF THE RINGS - DEFO-REAL SERIES - STAR ACE",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/n/a/nazgul2-min.jpg",
      preco: 489
    },
    {
      nome: "SHE-HULK - MARVEL COMICS - ADI GRANOV ARTIST SERIES STATUE - SIDESHOW COLLECTIBLES",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/h/shehulk4-min.jpg",
      preco: 4099
    },
    {
      nome: "HARRY POTTER - HARRY POTTER - Q-PAL - QUANTUM MECHANIX",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/h/a/harryqpal3-min.jpg",
      preco: 129
    },
    {
      nome: "DAREDEVIL - DAREDEVIL (NETFLIX) - Q-FIG DIORAMA - QUANTUM MECHANIX",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/d/a/daredevil3.jpg",
      preco: 134
    },
    {
      nome: "LOKI - THOR: RAGNAROK - Q-FIG DIORAMA - QUANTUM MECHANIX",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/l/o/loki-min.jpg",
      preco: 134
    },
    {
      nome: "THANOS - AVENGERS: ENDGAME - EGG ATTACK ACTION - BEAST KINGDOM",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/t/h/thanos_eggattack2-min.jpg",
      preco: 819
    },
    {
      nome: "ALIEN METALLIC COLOR - TOY STORY - MINI EGG ATTACK - BEAST KINGDOM",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/a/l/alienmetallic.jpg",
      preco: 134
    },
    {
      nome: "GAMING REX - TOY STORY - MINI EGG ATTACK - BEAST KINGDOM",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/r/e/rex4-min.jpg",
      preco: 134
    },
    {
      nome: "HAM & COIN - TOY STORY - MINI EGG ATTACK - BEAST KINGDOM",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/h/a/ham3-min.jpg",
      preco: 134
    },
    {
      nome: "ALIEN & UFO - TOY STORY - MINI EGG ATTACK - BEAST KINGDOM",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/a/l/alieneufo.jpg",
      preco: 134
    },
    {
      nome: "WOLVERINE - X-MEN - MARVEL COMICS - EGG ATTACK ACTION - BEAST KINGDOM",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/w/o/wolverine_eggattack-min.jpg",
      preco: 649
    },
    {
      nome: "CYCLOPS - X-MEN - MARVEL COMICS - EGG ATTACK ACTION - BEAST KINGDOM",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/c/y/cyclops_egg_attack2.jpg",
      preco: 649
    },
    {
      nome: "FREDDY KRUEGER - A NIGTMARE ON ELM STREET - TOONY TERRORS - 6\" SCALE ACTION FIGURE - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/t/o/toonyterrors_3-min_1.jpg",
      preco: 119
    },
    {
      nome: "PENNYWISE - IT (1990) - TOONY TERRORS - 6\" SCALE ACTION FIGURE - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/t/o/toonyterrors_4-min_1.jpg",
      preco: 119
    },
    {
      nome: "BABY TURTLES SET - TEENAGE MUTANT NINJA TURTLES - 1/4 SCALE ACTION FIGURES - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/a/babyturtles_6.jpg",
      preco: 419
    },
    {
      nome: "NEWBORN DELUXE - ALIEN: RESURECTION - 7\" SCALE ACTION FIGURE - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/a/l/alien3_1.jpg",
      preco: 299
    },
    {
      nome: "BROLY - DRAGON BALL SUPER: BROLY - S.H.FIGUARTS - BANDAI",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/r/broly-shfiguarts-2.jpg",
      preco: 489
    },
    {
      nome: "EVA MARK.06 - EVANGELION - NXEDGE STYLE - BANDAI",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/e/v/eva-mk-06-nxedgestyle-02.jpg",
      preco: 229
    },
    {
      nome: "SANJI (BLACK LEG) - ONE PIECE - FIGUARTSZERO - BANDAI",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/a/sanji_3.jpg",
      preco: 249
    },
    {
      nome: "ULTRAMAN GINGA - ULTRAMAN - S.H.FIGUARTS - BANDAI",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/u/l/ultraman4-min.jpg",
      preco: 379
    },
    {
      nome: "XXXG-01D GUNDAM DEATHSCYTHE - MOBILE SUIT GUNDAM - BANDAI",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/d/e/deathscythe2.jpg",
      preco: 249
    },
    {
      nome: "ASW-G-08 GUNDAM BARBATOS - MOBILE SUIT GUNDAM - BANDAI",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/a/barbatos.jpg",
      preco: 249
    },
    {
      nome: "RX-0 UNICORN GUNDAM 02 BANSHEE - MOBILE SUIT GUNDAM - BANDAI",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/a/banshee.jpg",
      preco: 249
    },
    {
      nome: "UZUMAKI NARUTO (RASENGAN - KIZUNA RELATION) - NARUTO - FIGUARTS ZERO - BANDAI",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/n/a/naruto2_5.jpg",
      preco: 429
    },
    {
      nome: "TWILIGHT SPARKLE - MY LITTLE PONY - BISHOUJO STATUE - KOTOBUKIYA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/t/w/twilight-min.jpg",
      preco: 819
    },
    {
      nome: "SHE-HULK - MARVEL COMICS - ARTFX PREMIER STATUE - KOTOBUKIYA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/h/shehulk_4-min.jpg",
      preco: 1469
    },
    {
      nome: "CAPTAIN AMERICA - MARVEL COMICS - ARTFX PREMIER STATUE - KOTOBUKIYA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/c/a/capamerica_koto_5.jpg",
      preco: 979
    },
    {
      nome: "THE PUNISHER - MARVEL COMICS - MARVEL GALLERY - DIAMOND",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/p/u/punisher_diamond.jpg",
      preco: 279
    },
    {
      nome: "IRON MAN MARK LXXXV - AVENGERS: ENDGAME - MARVEL GALLERY STATUE - DIAMOND",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/h/o/homemdeferro_diamond_amarelo.jpg",
      preco: 429
    },
    {
      nome: "JASON VOORHEES - FRIDAY THE 13TH PART II - LIVING DEAD DOLLS - MEZCO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/j/a/jason_mezco.jpg",
      preco: 329
    },
    {
      nome: "CHUCKY - CHILD'S PLAY - DESIGNER SERIES - MEZCO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/c/h/chucky_mezco.jpg",
      preco: 314
    },
    {
      nome: "DAREDEVIL - DAREDEVIL (NETFLIX) - ONE:12 - MEZCO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/d/a/daredevil_mezco.jpg",
      preco: 739
    },
    {
      nome: "THOR - THOR: RAGNAROK - ONE:12 - MEZCO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/t/h/thor_mezco-min.jpg",
      preco: 739
    },
    {
      nome: "BLACK PANTHER - BLACK PANTHER (2018) - ONE:12 - MEZCO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/l/black_panther_mezco.jpg",
      preco: 739
    },
    {
      nome: "THANOS - AVENGERS: INFINITY WAR - EGG ATTACK ACTION - BEAST KINGDOM",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/t/h/thanos_egg_attack-min.jpg",
      preco: 819
    },
    {
      nome: "IRON SPIDER-MAN DELUXE - AVENGERS: INFINITY WAR - EGG ATTACK ACTION - BEAST KINGDOM",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/p/spider_egg_attack.jpg",
      preco: 819
    },
    {
      nome: "DOCTOR STRANGE - AVENGERS: INFINITY WAR - EGG ATTACK ACTION - BEAST KINGDOM",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/d/o/doctor_strange_egg_attack.jpg",
      preco: 659
    },
    {
      nome: "IRON MAN MARK L - AVENGERS: INFINITY WAR - MINI EGG ATTACK - BEAST KINGDOM",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/h/o/homemdeferro_egg.jpg",
      preco: 139
    },
    {
      nome: "IRON MAN MARK XLII - IRON MAN 3 - D-STAGE - BEAST KINGDOM",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/m/k/mk42.jpg",
      preco: 409
    },
    {
      nome: "BATMAN - BATMAN: HUSH - DC COMICS - PRIME 1 STUDIO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/b/a/batman_dc-comics_silo_2.png",
      preco: 14999
    },
    {
      nome: "TYGRA - THUNDERCATS - MINI CO.",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/t/y/tygra2.jpg",
      preco: 154
    },
    {
      nome: "PANTHRO - THUNDERCATS - MINI CO.",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/p/a/panthro2.jpg",
      preco: 154
    },
    {
      nome: "CHEETARA & SNARF - THUNDERCATS - MINI CO.",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/c/h/cheetara3.jpg",
      preco: 154
    },
    {
      nome: "LION-O - THUNDERCATS - MINI CO.",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/l/i/lion2_2.jpg",
      preco: 154
    },
    {
      nome: "EZIO - ASSASSIN'S CREED - MINI CO.",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/e/z/ezio2.jpg",
      preco: 164
    },
    {
      nome: "VOUCHER DE RESERVA - CAPTAIN AMERICA 2023 BDS 1/10 ART SCALE - AVENGERS: ENDGAME - IRON STUDIOS",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/v/o/vouchercaptain2023.jpg",
      preco: 50
    },
    {
      nome: "VOUCHER DE RESERVA - CAPTAIN AMERICA 2012 BDS 1/10 ART SCALE - AVENGERS: ENDGAME - IRON STUDIOS",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/v/o/vouchercaptain2012.jpg",
      preco: 50
    },
    {
      nome: "VOUCHER DE RESERVA - CAPTAIN MARVEL 1/10 BDS - AVENGERS: ENDGAME - IRON STUDIOS",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/v/o/vouchercapmarvel_3.jpg",
      preco: 50
    },
    {
      nome: "PSYLOCKE - MARVEL COMICS - PREMIUM FORMAT - SIDESHOW COLLECTIBLES",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/p/s/psylocke7.jpg",
      preco: 6559
    },
    {
      nome: "LUKE SKYWALKER - STAR WARS: EPISODE V - THE EMPIRE STRIKES BACK - PREMIUM FORMAT - SIDESHOW COLLECTIBLES",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/l/u/luke7_2.jpg",
      preco: 4919
    },
    {
      nome: "MICHAEL MYERS - HALLOWEEN (2018) - 1/4 SCALE ACTION FIGURE - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/m/i/michaelmyers14-2.jpg",
      preco: 1069
    },
    {
      nome: "AMPHIBIAN MAN - THE SHAPE OF WATER - 7\" SCALE ACTION FIGURE - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/a/m/amphibian2.jpg",
      preco: 264
    },
    {
      nome: "PENNYWISE - IT (2017) – 1/4 SCALE ACTION FIGURE – NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/p/e/pennywise-14-2017-neca-1.jpg",
      preco: 1069
    },
    {
      nome: "ULTIMATE PENNYWISE V.2 - IT (1990) – 7” SCALE ACTION FIGURE - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/p/e/pennywise902.jpg",
      preco: 289
    },
    {
      nome: "ULTIMATE MICHAEL MYERS - HALLOWEEN 2 (1981) - 7\" SCALE ACTION FIGURE - NECA",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/m/i/michaelmyersultimate2.jpg",
      preco: 264
    },
    {
      nome: "IRON MAN MARK L ACCESSORIES - AVENGERS: INFINITY WAR - HOT TOYS",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/a/c/accessory.jpg",
      preco: 1699
    },
    {
      nome: "UZUMAKI NARUTO NERO - NARUTO SHIPPUDEN - GRANDISTA - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/n/a/naruto4_1.jpg",
      preco: 329
    },
    {
      nome: "SMOKER - ONE PIECE: STAMPEDE - DXF THE GRANDLINE MEN VOL. 3A - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/s/m/smoker_1.jpg",
      preco: 194
    },
    {
      nome: "ROB LUCCI - ONE PIECE: STAMPEDE - DXF THE GRANDLINE MEN VOL. 3B - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/r/o/roblucci2.jpg",
      preco: 194
    },
    {
      nome: "NAMI - ONE PIECE: STAMPEDE - FLAG DIAMOND SHIP - BANDAI/BANPRESTO",
      imgUrl: "https://fantoy.com.br/media/catalog/product/cache/1/small_image/275x260/9df78eab33525d08d6e5fb8d27136e95/n/a/nami_5.jpg",
      preco: 214
    }
  ];

}
