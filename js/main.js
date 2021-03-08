function main() {

    //trend
    calcTrend();

    //median
    calcMedian();

    //span
    calcSpan();

    // mid Statistical
    calcMidStatistical();

    //dispersion
    calcDispersion();

    //standardDeviation
    calcStandardDeviation();

    //correctedStandardDeviation
    calcCorrectedDispersion();

    //correctedStandardDeviation
    calcCorrectedStandardDeviation();

    //variation
    calcVariation();

    //calcInitialMoment
    calcInitialMomentOfK(3);

    //centralMoment
    calcCentralMomentOfK(3);

    //asymmetry
    calcAsymmetry();

    //excess
    calcExcess();


    //build graphs
    buildGraphs();
}