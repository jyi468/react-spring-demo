import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import React from "react";
import {MarketData} from "../../types/types";
import {createStyles, Theme, withStyles} from "@material-ui/core/styles";

am4core.useTheme(am4themes_animated);
const styles = (theme: Theme) => createStyles({
    chart: {
        width: "100%",
        height: "500px"
    }
});

interface MinuteDataProps {
    classes: any;
    data: {
        time: Date;
        close: number;
    }[];
    name: string;
}

class MinuteData extends React.Component<MinuteDataProps> {
    chart: any;
    componentDidMount() {
        const { data } = this.props;
        let chart = am4core.create("chartdiv", am4charts.XYChart);

        chart.paddingRight = 20;

        /*let data = [];
        let visits = 10;
        for (let i = 1; i < 366; i++) {
            visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
            data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
        }*/

        chart.data = data;

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.dateFormats.setKey("minute", "hh:mm a");
        dateAxis.periodChangeDateFormats.setKey("minute", "hh:mm a");

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        //valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;

        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "time";
        series.dataFields.valueY = "close";

        series.tooltipText = "{valueY.close}";
        chart.cursor = new am4charts.XYCursor();

        let scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(series);
        chart.scrollbarX = scrollbarX;

        this.chart = chart;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    componentDidUpdate(oldProps: MinuteDataProps, newProps: MinuteDataProps) {
        /*if (this.chart && newProps) {
            this.chart.data = newProps.data;
        }*/
    }

    render() {
        const { data, name, classes } = this.props;
        if (this.chart) {
            this.chart.data = data;
        }
        return (<div id="chartdiv" className={classes.chart}></div>);
    }
}

export default withStyles(styles, { withTheme: true })(MinuteData);
