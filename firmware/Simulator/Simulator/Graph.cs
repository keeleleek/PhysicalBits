﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace Simulator
{
    public partial class Graph : UserControl
    {
        private List<int> values = new List<int>();
        private Pen pen = new Pen(Color.Green, 2);
        private Brush brush = Brushes.White;

        public Graph()
        {
            InitializeComponent();
        }

        private void Graph_Load(object sender, EventArgs e)
        {
            SetStyle(ControlStyles.OptimizedDoubleBuffer
                | ControlStyles.UserPaint
                | ControlStyles.AllPaintingInWmPaint,
                true);
        }

        public void Add(int value)
        {
            if (values.Count >= Width)
            {
                values.RemoveAt(0);
            }
            values.Add(value);
            Refresh();
        }

        private int ValueAt(int index)
        {
            int diff = Width - values.Count;
            if (index < diff)
            {
                return 0;
            }
            return values[index - diff];
        }

        private void Graph_Paint(object sender, PaintEventArgs e)
        {
            Graphics g = e.Graphics;
            g.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.AntiAlias;
            g.TranslateTransform(Location.X * -1, Location.Y * -1);
            g.FillRectangle(brush, Bounds);

            for (int x = 1; x < Width; x++)
            {
                double border = 10;
                double m = (2 * border - Height) / 1023;
                double b = Height - border;

                Point pt1 = new Point(Left + (x - 1), Top + Convert.ToInt32(m * ValueAt(x - 1) + b));
                Point pt2 = new Point(Left + x, Top + Convert.ToInt32(m * ValueAt(x) + b));
                
                g.DrawLine(pen, pt1, pt2);
            }
        }
    }
}
